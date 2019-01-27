let request = require('request-promise');
let querystring = require('querystring');
let express = require('express');
let router = express.Router();
const store = require('../store');

const searchUrl = 'https://api.spotify.com/v1/search';

router.get('/song', async function (req, res, next) {
  let tokenInfo = await store.get('tokenInfo');

  if (!tokenInfo) {
    res.status(400).send('You must login first');
    return;
  }

  if (!req.query.q || req.query.q === '') {
    res.status(400).send('You must include the q property');
    return;
  }

  console.log('Using access token: ' + tokenInfo.access_token);

  let options = {
    uri: searchUrl + '?' + querystring.stringify({
      q: req.query.q,
      type: 'track'
    }),
    headers: {
      Authorization: 'Bearer ' + tokenInfo.access_token
    }
  };

  console.log(JSON.stringify(options));

  let searchResponse = await request(options);

  res.header('Content-Type', 'application/json');
  res.status(200).send(searchResponse);
});

module.exports = router;
