console.log("script loaded");

let express = require("express");

let app = express();

let port = 3000;

let server = app.listen(port);

app.use(express.static("public/app sketch"));

console.log('running server on http://localhost:'+port)