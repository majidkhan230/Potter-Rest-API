const http = require("http");

const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/plain");
// res.statusCode = 404
// console.log(req.url) 
console.log(req.method)

try {
    if(req.method === "GET"){

        if(req.url === '/'){
            res.writeHead(200,"ok hein bhai ",{"content-type":"text/html"})
            res.end("<h1>Hello world</h1>");
        }
        else if( req.url === '/about'){
            res.writeHead(200,"ok hein bhai ",{"content-type":"text/html"})
            res.end("<h1>About</h1>");
        }
        else {
            res.writeHead(404,"ok nahi hein bhai ",{"content-type":"text/html"})
            res.end("<h1>Not Found</h1>");
        }
        
    }else{
            throw new Error("method not allowed")
    }
} catch (error) {
    res.writeHead(500,"server error",{"content-type":"text/html"})    
    res.end("server error")
}






// res.writeHead(200,"ok hein bhai ",{"content-type":"text/html"})
//   res.end("<h1>Hello world</h1>");
});

server.listen(3000, () => {
  console.log("server is running");
});
