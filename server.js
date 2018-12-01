var http = require('http');
var url = require('url');
var path = require('path');
var server = http.createServer(requestHandler)
var fs = require('fs');
var port= process.env.PORT || 3000;

server.listen(port, function (err) {
    if(err) {
        throw err;
    }
    console.log("==Server is listening on port 3000");
});
console.log('working on 3000');

function requestHandler(request, response) {
    console.log("== Request was received");
    console.log(request.url);
    var header;

    if(request.url === '/index.html'){
        console.log("==index.html");
        response.setHeader('Content-Type', 'text/html');
        response.writeHead(response.statusCode);
        currentPath=path.join(__dirname, '/public/index.html');

        console.log('current path' , currentPath);        
        fs.readFile(currentPath, {encoding: 'utf8'}, function (err ,contents){ //ERROR IN THE START the first path is of type undefined
            if(!err) {
                 console.log("no error should write index.html");
                 response.write(contents);
                 response.end();
                 console.log("past index.html");
            } else {
                console.log(err);
            }
        });
    }
  else if(request.url === '/style.css'){
        console.log("==style.css");
        response.setHeader('Content-Type', 'text/css')
        response.writeHead(response.statusCode);
        currentPath=path.join(__dirname, '/public/style.css');
        
        console.log('current path' , currentPath);        
        fs.readFile(currentPath, {encoding: 'utf8'}, function (err ,contents){ //ERROR IN THE START the first path is of type undefined
            if(!err) {
                 console.log("no error should write style.css");
                 response.write(contents);
                 response.end();
                 console.log("past style.css");
            } else {
                console.log(err);
            }
        });
    }
 else if(request.url === '/index.js'){
        console.log("==index.js");
        response.setHeader('Content-Type', 'application/javascript')
        response.writeHead(response.statusCode);
        currentPath=path.join(__dirname, '/public/index.js');
      
        fs.readFile(currentPath, {encoding: 'utf8'}, function (err ,contents){ //ERROR IN THE START the first path is of type undefined
            if(!err) {
                 console.log("no error should write index.jss");
                 response.write(contents);
                 response.end();
                 console.log("past index.js");
            } else {
                console.log(err);
            }
        });
    }
    else{
        console.log("==404.html");
        response.setHeader('Content-Type', 'text/html');
        response.writeHead(response.statusCode);
        currentPath=path.join(__dirname, '/public/404.html');

        console.log('current path' , currentPath);        
        fs.readFile(currentPath, {encoding: 'utf8'}, function (err ,contents){ //ERROR IN THE START the first path is of type undefined
            if(!err) {
                 console.log("no error should write 404.html");

                 response.write(contents);
                 response.end();
                 console.log("past 404.html");
            } else {
                console.log(err);
            }
        });
    }
}