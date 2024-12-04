const http = require("http");
const url = require('url');
const path= require('path')
const fs = require("fs/promises")

// const __filename = url.fileURLToPath(import.meta.url) // only use import.meta in an ES module context, 
console.log(__filename) //already declared when using commonJS module
console.log(__dirname) //already declared when using commonJS module
// const __dirname = path.dirname(__filename)  //do in ES module context
// console.log(__dirname)

const server = http.createServer( async(req, res) => {
//   res.setHeader("Content-Type", "text/plain");
// res.statusCode = 404
// console.log(req.url) 
// console.log(req.method)



try {
    if(req.method === "GET"){
        let filePath; 
        if(req.url === '/'){
            filePath = path.join(__dirname,'public', '/index.html')
            // res.writeHead(200,"ok hein bhai ",{"Content-Type":"text/html"})
            // res.end("<h1>Hello world</h1>");
        }
        else if( req.url === '/about'){
            filePath = path.join(__dirname,'public', '/about.html')

            // res.writeHead(200,"ok hein bhai ",{"Content-Type":"text/html"})
            // res.end("<h1>About</h1>");
        }
        else {
            throw new Error("Not found")
            // res.writeHead(404,"ok nahi hein bhai ",{"Content-Type":"text/html"})
            // res.end("<h1>Not Found</h1>");
        }

        const data  = await fs.readFile(filePath)
        res.writeHead(200,{"Content-Type":"text/html"})
        
        res.end(data)


        
    }else{
            throw new Error("method not allowed")
    }
} catch (error) {
    res.writeHead(500,"server error",{"Content-Type":"text/html"})    
    res.end("server error")
}


const PORT = process.env.PORT




// res.writeHead(200,"ok hein bhai ",{"Content-Type":"text/html"})
//   res.end("<h1>Hello world</h1>");
});

server.listen(PORT, () => {
  console.log(`server is running or ${PORT}`);
});
