function route(handle, pathname, response, request){
  console.log("a punto de enrutar una solicitud para : "+pathname);
  if(typeof handle[pathname]=== 'function'){
    handle[pathname](response,request);
  }else {
    console.log("no se halló ningún controlador de solicitud para "+pathname);
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("404 Not Found");
    response.end();
  }
}
exports.route = route;
