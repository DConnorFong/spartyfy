let querystring = require('querystring');
let request = require('request-promise');
let express = require('express');
let router = express.Router();
const store = require('../store');

store.set('clientIps', []);
store.set('upVotes', 0);
store.set('downVotes', 0);

router.put('/up', async function(req, res) {
  let clientIps = await store.get('clientIps');
  if (!clientIps.includes(req.clientIp)) {
    clientIps.push(req.clientIp);
    await store.set('clientIps', clientIps);
    let upVotes = await store.get('upVotes');
    store.set('upVotes', upVotes + 1);
  }
  res.send(204);
});

router.put('/down', async function(req, res) {
  let clientIps = await store.get('clientIps');
  if (!clientIps.includes(req.clientIp)) {
    clientIps.push(req.clientIp);
    await store.set('clientIps', clientIps);
    let downVotes = await store.get('downVotes');
    store.set('downVotes', downVotes + 1);
  }
  res.send(204);
});

router.get('/', async function(req, res) {
  let up = await store.get('upVotes');
  let down = await store.get('downVotes');

  res.status(200).send({up: up, down: down});
});

module.exports = router;