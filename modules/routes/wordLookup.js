var express = require('express');
var router = require('express').Router();
var bodyParser = require('body-parser');
// var path = require('path');
// var mongoose = require('mongoose');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

// Start Code Here - Add dependecies as needed



router.get('/', function (req, res) {

  var searchWord = req.body;
  console.log('logging searchWord -> ', searchWord);
  

  var wordDefinition = {
    url: 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/' + searchWord + '/regions=us',
    headers: {
      "Accept": "application/json",
      "app_id": APP_ID,
      "app_key": APP_KEY
    }
  };

  request(wordDefinition, function (error, response, body) {
    if (response && response.statusCode == 200) {
      console.log('logging 200 inside wordLookup.js router ', response.statusCode);

      res.send(body);
    } else {
      res.sendStatus(500);
      console.log('Logging 500 in wordLookup.js router ', error);

    }
  });
});

module.exports = router;