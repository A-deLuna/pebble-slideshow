var express = require('express');
var os = require('os');
var robotjs = require('robotjs');
var app = express();

app.get('/up',function (req, res) {
  console.log('up');
  robotjs.keyTap('right');
  res.send('up');
})
app.get('/down',function (req, res) {
  console.log('down');
  robotjs.keyTap('left');
  res.send('down');
})
var server = app.listen(3000);


var ifaces = os.networkInterfaces();
console.log(ifaces);
