const http = require("http");
const fs = require("fs");
const port = 3001;   

http.createServer(function(request, response){

    fs.readFile("index.html", function(error, data){
             
        console.log("this");
        if(error){
                   
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else{
            console.log("else!");
            response.end(data);
        }
    });

}).listen(port, function(){
    console.log(`Server started at ${port}`);
});