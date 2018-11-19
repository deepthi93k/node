const http=require('http');
const server = http.createServer(function(req,res){
    res.write('Heloo world!');//write a response to the client
    res.end(); //end the response
});
server.listen(3000);
console.log('listening on port 3000...');