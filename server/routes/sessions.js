let request = require('request-promise');
let querystring = require('querystring');
let express = require('express');
let router = express.Router();


const clientId = '75132ae230634cb78e3418e631ddc3bb';
const clientSecret = '1199d41fca5e47b29f5209c32fc491b4';
const stateKey = 'spotify_auth_state';
const redirectUri = 'http://localhost:5000/sessions/token';

router.get('/login', function(req, res) {
  let state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  let scope = 'user-modify-playback-state';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri,
      state: state
    }));
});

router.get('/token', async function(req, res, next) {
  let code = req.query.code || null;
  let state = req.query.state || null;
  let storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' + querystring.stringify({error: 'state_mismatch'}));
  } else {
    res.clearCookie(stateKey);
    let options = {
      method: 'POST',
      uri: 'https://accounts.spotify.com/api/token',
      form: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret
      }
    };

    try {
      let tokenResponse = await request(options);
      let tokenInfo = JSON.parse(tokenResponse);
      req.session.tokenInfo = tokenInfo;
      console.log('token:\n' + tokenInfo.access_token);

      res.redirect('http://localhost:3000/host?' +
        querystring.stringify({visible: false}));
    } catch (err) {
      let message = `Failed to request token from Spotify\nError: ${err}`;
      console.log(message);
      res.status(500).send(message);
    }
  }
});

function generateRandomString(length) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

module.exports = router;
