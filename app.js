var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser');
var wordLookup = require('./modules/routes/wordLookup');
var index = require('./modules/routes/index');
// var ExampleModel = require('./models/example.model.js');
var port = process.env.PORT || 8080;

app.use( express.static( 'public' ) );
app.use( '/', index );
app.use('/wordLookup', wordLookup);

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end spin up