// import express, { response } from "express";

// const app = express();
// const port = 8888;

// app.listen(port, () => {
//   console.log("server es6 ajilla");
// });

import http from "http";
const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request, "server es5 ajilla");
  response.end("hello world");
});
server.listen(8000);
