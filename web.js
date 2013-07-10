var express = require('express'), fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  var buffer = new Buffer(fs.readFileSync('index.html'), "utf-8")
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
