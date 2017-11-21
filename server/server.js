var http = require("http");
var url = require("url");

function start(route, handle){
  function onRequest(request,response){
    let pathname = url.parse(request.url).pathname;

    console.log("solicitud para  : "+pathname+"recibida");
    route(handle,pathname);
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World");
    response.end();
  };
  http.createServer(onRequest).listen(8888);
  console.log("Sever started");
}

exports.start = start;
