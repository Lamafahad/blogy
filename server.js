// Require necssary NPM Packages
const express = require('express');
const mongoose = require("mongoose");

// Instantiate Express Application Object
const app = express();

// Define PORT for the API to run on
const port = process.env.PORT || 5000; // this mean its will take the enviroment port, if its not available will take 5000 port

// start the server to listen for requests on a given port
app.listen(port, () => {
    console.log(`blogy is listening on port ${port}`);
});