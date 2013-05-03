var express = require('express');
var app = express();

app.use(express.bodyParser());

require('./apps/dgrest/routes.js')(app);

app.listen(3000);
console.log('Listening on port 3000');
