const express = require("express");
// const   {connectDb } = require("./src/config/dbConnection");
const errorHandler = require("./src/middlewares/errorHandler");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser")
const {corsOptions} = require("./src/configs/cors")
const app = express();




const port = process.env.PORT || 5000;

app.use(express.json());
// app.use("/api/contacts", require("./src/routes/contactRoutes"));
app.use("/api/admin", require("./src/routes/adminRoutes"));
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(bodyParser.json())
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
