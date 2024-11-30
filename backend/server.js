const http = require("http");
const app = require("./app.js");
const port = process.env.PORT || 7777;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server is running on ${port}`);
});
