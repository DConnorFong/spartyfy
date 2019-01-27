let querystring = require('querystring');
let request = require('request-promise');
let express = require('express');
let router = express.Router();
let Song = require('../models/song');
const store = require('../store');

const playUrl = 'https://api.spotify.com/v1/me/player/play';
const featureUrl = 'https://api.spotify.com/v1/audio-features';

let timeout;

router.post('/song', async function(req, res) {
  let tokenInfo = await store.get('tokenInfo');

  if (!tokenInfo) {
    res.status(400).send('Host has not logged in yet');
    return;
  }

  let songRaw = req.body.raw;

  let features = await getAudioFeatures(songRaw.id, tokenInfo.access_token);

  if (features === null) {
    res.status(500).send('Failed to find audio features');
    return;
  }

  features = JSON.parse(features);

  let song = new Song(req.body.raw, features.duration_ms);

  let playlist = await store.get('playlist');

  if (!playlist) {
    store.set('playlist', [song]);
    let playResponse = await playSong();

    if (playResponse === null) {
      res.status(500).send('Failed to play music');
      return;
    }
  } else {
    playlist.push(song);
    store.set('playlist', playlist);
  }

  res.status(200).send('Added successfully');
});

router.get('/', async function(req, res) {
  let playlist = await store.get('playlist');
  if (!playlist) {
    playlist = [];
  }

  res.status(200).send(JSON.stringify(playlist));
});

router.post('/skip', async function(req, res) {
  let playlist = await store.get('playlist');
  if (playlist.length <= 1) {
    res.status(400).send('Not enough songs to skip');
    return;
  }
  store.set('playlist', playlist.slice(1));

  clearTimeout(timeout);

  try {
    await playSong();
    res.status(200).send('Song skipped');
  } catch (err) {
    res.status(500).send('Failed to skip song');
  }
});

async function getAudioFeatures(id, accessToken) {
  let options = {
    method: 'GET',
    uri: featureUrl + '/' + id,
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  };

  try {
    return await request(options);
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function playSong() {
  let playlist = await store.get('playlist');
  let tokenInfo = await store.get('tokenInfo');

  if (playlist.length === 0) {
    store.set('playlist', undefined);
    return;
  }

  let song = playlist[0];
  console.log('Playing ' + song.raw.name);

  let options = {
    method: 'PUT',
    uri: playUrl,
    body: JSON.stringify({ uris: [song.raw.uri] }),
    headers: {
      Authorization: 'Bearer ' + tokenInfo.access_token
    }
  };

  try {
    let response = await request(options);
    timeout = setTimeout(async function() {
      console.log('Playing next song');
      playlist = await store.get('playlist');
      playlist = playlist.splice(1);
      await store.set('playlist', playlist);
      await playSong();
    }, song.duration + 1000);

    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
}

module.exports = router;