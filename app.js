var express = require('express');
var app = express();

require('./apps/dgrest/routes.js')(app);

app.listen(3000);
console.log('Listening on port 3000');
