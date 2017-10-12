const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser');
const wordLookup = require('./modules/routes/wordLookup');
const index = require('./modules/routes/index');
// const ExampleModel = require('./models/example.model.js');
const port = process.env.PORT || 8080;

app.use( express.static( 'public' ) );
app.use( '/', index );
app.use('/wordLookup', wordLookup);

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end spin up