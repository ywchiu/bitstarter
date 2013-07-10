var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.writeHead(200, { 'Content-type': 'text/html'});
    response.end(fs.readFileSync('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
