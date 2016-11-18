var twemoji = require('twemoji');
var love = twemoji.parse('❤️');


var http = require('http');
http.createServer(function (req, res) {
  res.write('<html><head></head><body>');
  res.write('<p>'+love+'</p>');
  res.end('</body></html>');
}).listen(1337);
