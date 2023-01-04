const http = require("http");
const fs = require("fs");
const _ = require('lodash');


const server = http.createServer((req, res) => {
 
  //lodash is a cool node package that has useful things like this
  const num = _.random(0, 20);
  console.log(num);
  const greet = _.once(() => {
    console.log('hello world');
  });
  greet();
  greet();
  
  res.setHeader("Content-Type", "text/html");

  let path = './views/';
  switch(req.url){
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
      break;
  }


  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});

// Here you are calling your local server and when it starts we give it html to inject to the server
