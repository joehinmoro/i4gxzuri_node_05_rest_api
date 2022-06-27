// IMPORTS
// require modules and exports
const express = require("express");
const { json } = require("express");
const routes = require("./routes/flightRoute");

// SETTINGS
// instantiate express app
const app = express();

// MIDDLEWARE
// parse json data in request body
app.use(json());

// ROUTES
// Flight
app.use("/", routes);

// SERVER
// define server port
const port = process.env.PORT || 3000;
// listen for request
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
