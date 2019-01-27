let querystring = require('querystring');
let express = require('express');
let router = express.Router();
let Song = require('../models/song');
const store = require('../store');

router.post('/song', async function(req, res) {
  let song = new Song(req.body.raw);

  let tokenInfo = await store.get('tokenInfo');

  if (!tokenInfo) {
    res.status(400).send('Host has not logged in yet');
    return;
  }

  let playlist = await store.get('playlist');

  if (!playlist) {
    playlist = [];
  }

  playlist.push(song);

  console.log(JSON.stringify(playlist));
  await store.set('playlist', playlist);

  res.status(200).send('Added successfully.')
});

router.get('/', async function(req, res) {
  let playlist = await store.get('playlist');
  res.status(200).send(JSON.stringify(playlist));
});

module.exports = router;