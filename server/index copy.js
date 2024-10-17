const express = require("express");
//const   {connectDb } = require("./src/config/dbConnection");
const errorHandler = require("./src/middlewares/errorHandler");
const cors = require("cors");
const bodyParser = require("body-parser")
const {corsOptions} = require("./src/configs/cors")
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();
app.use(express.urlencoded({ extended: true }));




 // Defining User schema 
// const userSchema = new mongoose.Schema( 
//     { name: String, age: Number } 
//  ) 
  
//  // Defining User model 
// const User = mongoose.model('User', userSchema); 

// const dbURL = 'mongodb://localhost:27017'
// const db = mongoose.createConnection(dbURL, {dbName: 'my-db-name'})

//export const User = db.model('User', userSchema)
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = async () => {
//   try {
//       await mongoose.connect(process.env.MONGODB_URI, {});
//       console.log("CONNECTED TO DATABASE SUCCESSFULLY");
//   } catch (error) {
//       console.error('COULD NOT CONNECT TO DATABASE:', error.message);
//   }
// };

// const db = mongoose.connection;
// db.once("open", (_) => {
//   console.log("Database connected:", process.env.MONGODB_URI);
// });

// db.on("error", (err) => {
//   console.error("connection error:", err);
// });

// // Defining User schema 
// const userSchema = new mongoose.Schema( 
//     { name: String, age: Number } 
// ) 
  
// // Defining User model 
// const User = mongoose.model('User', userSchema); 
  
// // Create collection of Model 
// User.createCollection().then(function (collection) { 
//     console.log('Collection is created!'); 
// });


// // Create a new user
// const newUser = new User({
//   name: 'John Doe',
//   email: 'johndoe@example.com',
//   password: 'password123'
// });

// newUser.save()
//   .then(() => console.log('User created'))
//   .catch((err) => console.log(err));

// // Read all users
// User.find()
//   .then((users) => console.log(users))
//   .catch((err) => console.log(err));

// // Update a user
// User.findOneAndUpdate({ name: 'John Doe' }, { name: 'Jane Doe' })
//   .then(() => console.log('User updated'))
//   .catch((err) => console.log(err));

// // Delete a user
// User.deleteOne({ name: 'Jane Doe' })
//   .then(() => console.log('User deleted'))
//   .catch((err) => console.log(err));

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
