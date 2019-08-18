const express = require('express');
const bodyParser = require('body-parser');

const pathModel = require('./models/path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.send('Path API. Use: POST http://localhost:3000/path (x1,y1,z1,x2,y2,z2)');
});

app.post('/path', pathModel.getDistance);

app.listen(3001, function() {
  console.log('Path API started');
});