const http = require("http");
const fs = require("fs");

const PORT = 8000;

const data = {
  name: "Sami Kalammallah",
  age: 25,
};

// HTML Static Response
const onRequest = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./index.html", null, (error, data) => {
    console.log("Response reloaded.");
    if (error) {
      response.writeHead(404);
      response.write("file not found");
    } else {
      response.write(data);
    }
    response.end();
  });
};

// JSON Static Response, usually to send api request
const onRequestJson = (request, response) => {
  response.writeHead(200, { "Content-type": "application/json" });
  response.end(JSON.stringify(data));
};

// Request and print the query
const onRequestQuery = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  let query = url.parse(req.url, true).query;
  let txt = query.name + " " + query.age;
  res.end(txt);
};

// Request and print any url
const onRequestAny = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(req.url);
  res.end();
};

// http.createServer(onRequest).listen(PORT);
http.createServer(onRequestJson).listen(PORT);
// http.createServer(onRequestQuery).listen(PORT);
// http.createServer(onRequestAny).listen(PORT);
console.log(`Server listening on http://localhost:${PORT}`);
