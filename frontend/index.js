const http = require("http");
const port = 4000;   

http.createServer(function(request, response){

    response.end("Hello World (With daemon!)!")

}).listen(port, function(){
    console.log(`Server started at ${port}`);
});