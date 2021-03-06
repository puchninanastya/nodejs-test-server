const fs = require('fs');
const path = require('path');
const http = require('http');
const debug = require('debug');

const logger = debug('mylogger');

const server = http.createServer((req, res) => {
  logger(req.method, req.url);

  if (req.url === '/' || req.url === '') {
      req.url = '/index.html';
  }

  fs.readFile( path.join(__dirname, '/public', req.url) , (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end();
      return;
    }

    res.writeHead(200, 'OK');
    res.write(data);
    res.end();
  });
});

server.listen(process.env.PORT || 3000);
logger("Server started!");
