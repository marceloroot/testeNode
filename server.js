const http = require("http");
const express = require('express');
const port = 3000;
const { ServerResponse } = require("http");

const router = express.Router();


const app = express();


app.get("/", function(req, res) {
  res.send("<h1>Servidor rodando com ExpressJS</h1>");
});



http.createServer(app).listen(3000, 


  () => 
  
  
  console.log("Servidor rodando local na porta 3000")
  
);