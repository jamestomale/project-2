var express = require("express");
// var cors = require("cors");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3000;
var path = require("path");
var http = require("http");
var server = http.createServer(handleRequest);

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
// app.use(cors());

require("./routes/apiRoutes.js")(app);

function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

    // When we visit different urls, call the function with different arguments
    switch (path) {

    case "/feed":
    case "/movies":
    case "/frameworks":
      return renderHTML(path + ".html", res);

    default:
      return renderHTML("./public/register.html", res);
    }
  }

  // function to take a filepath and respond with html
  function renderHTML(filePath, res) {
    return fs.readFile(__dirname + filePath, function(err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

var Users = require("./models/register");
app.use("/users",Users);
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/register.html"));
});
app.listen(PORT,function(){
 console.log("Server is running on port: " + PORT);
});
