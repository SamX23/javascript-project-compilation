const http = require("http");
const fs = require("fs");

const PORT = 8000;

const data = {
  name: "Sami Kalammallah",
  age: 25,
};

// HTML Static Response
function onRequest(request, response) {
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
}

// JSON Static Response, usually to send api request
function onRequestJson(request, response) {
  response.writeHead(200, { "Content-type": "application/json" });

  response.end(JSON.stringify(data));
}

// http.createServer(onRequest).listen(PORT);
http.createServer(onRequestJson).listen(PORT);
console.log(`Server listening on http://localhost:${PORT}`);
