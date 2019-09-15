var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var htmlroutes = require("./routing/htmlRoutes.js");
var apiRoutes = require("./routing/apiRoutes.js");


app.use(htmlroutes);
app.use(apiRoutes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.clear();
  console.log("Server listening on: http://localhost:" + PORT);
});
