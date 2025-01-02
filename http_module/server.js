const http = require("http");

// Create a webserver;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome to Saikat Bhadury Home Page Updated</h1>");
    res.end();
  }
  if (req.url === "/source-code") {
    res.setHeader("Content-Type", "text/plain");
    res.write("This is a source code page");
    res.end();
  }
});

// Listen Server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Lisiening to PORT ${PORT}`);
});
