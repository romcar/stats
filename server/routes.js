const router = require('express').Router();
const request = require('request');

router.route('/test')
  .get((req, res) => {
    const options = {
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/1',
    };
    request(options, (err, response, body) => {
      // console.log();
      const result = JSON.parse(body);
      res.end(JSON.stringify(result));
    });
  });

module.exports = router;
