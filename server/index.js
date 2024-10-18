const express = require('express');
const bodyParser = require('body-parser');
const {dbConnection} = require("./src/configs/mongoDB");
require('dotenv').config()

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

dbConnection();