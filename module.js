var http  = require("http");
var querystring = require("querystring");
var qs,name,password;
var dt = new Date();

http.createServer(function (req,res){
    var data1='';
    req.on('data',function(chunk){
        console.log(chunk);
        data1 += chunk;
        console.log("data in string format: "+data1);
    });
    req.on('end',function(){
        qs = querystring.parse(data1);
        console.log(qs);
        name = qs['username'];
        password=qs['password'];
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write("Hello "+name+ ", your password is "+ password);
        res.write("<br />You have entered your details at "+dt);
        res.end();
    });
}).listen(1000);
console.log("server has started");