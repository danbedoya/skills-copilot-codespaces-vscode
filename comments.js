// Create web server
// 1. Include http module
var http = require('http');

// 2. Create http server
var server = http.createServer(function(req, res) {
  // 4. Set response header
  res.writeHead(200, {'Content-Type': 'text/html'});

  // 5. Set response content
  res.write('<html><body><p>This is home Page.</p></body></html>');
  res.end();
});

// 3. Make server listen on port 3000
server.listen(3000);

console.log('Server running at http://localhost:3000/');