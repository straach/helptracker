var express    = require('express');        
var app        = express();                
var bodyParser = require('body-parser');
var config   = require('./config.json');
var GlobalRouter = require('./routes/GlobalRouter');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongoose   = require('mongoose');
mongoose.connect(config.connectionString);

var port = process.env.PORT || 8080;       

app.use('/api', new GlobalRouter().init());

app.listen(port);
console.log('Server waiting for requests on port' + port);