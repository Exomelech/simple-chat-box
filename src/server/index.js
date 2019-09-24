const express = require("express");
const app = express();
const cors = require("cors");
const jsonParser = express.json();
app.listen(3000);
app.use(cors());

const path = require("path");
const external_api = require("./lib/db_external_api");

app.use(jsonParser).use(express.static(path.join(__dirname, "../../dist")));

app.get("/", function(req, res) {
  console.log("Client has connected");
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.get("*", function(req, res) {
  console.log("Client has redirected");
  res.redirect("/");
});

app.post("/auth/", jsonParser, (req, res) => {
  console.log( 'Client has request auth' );
  external_api.auth_request(req.body)
    .then( data => res.json(data) );
});