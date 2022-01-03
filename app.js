const http = require("http");
// console.log(http);
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to server 5000\n");
  }
  if (req.url === "/about") {
    res.end(`<h1>This is about page</h1>
        <a href='/'>Back Home</a>`);
  }
  {
    res.end(`<h1>This is Error-------- page</h1>
        <a href='/'>Back Home</a>`);
  }
});
server.listen(5000);
