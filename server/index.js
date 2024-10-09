
//index.js
 
const express = require("express");
const app = express();
 
app.listen(8000, () => {
    console.log("Server Started at port no. 8000");
})
 
//Mongoose library instance
const mongoose = require('mongoose');
//URL of MongoDB Database
const mongoDBURL = 'mongodb://127.0.0.1:27017/mydemoDB';
 
let uri = "mongodb://127.0.0.1:27017"
//connect to Database
// mongoose.connect(mongoDBURL, {
//    // useNewUrlParser: true,
//    // useUnifiedTopology: true
// })
//     .then(() => { console.log("Connection Successfull") })
//     .catch((err) => { console.log("Received an Error ",err) })




const { MongoClient } = require("mongodb");

//  function(req, res) {
//  (async function mongo() {
//       let client;
//       try {
//         client = await MongoClient.connect(url, {useNewUrlParser: true});
//         debug('Connected correctly to server');

//         const db = client.db(dbName);
// }
// let client =  MongoClient.connect('mongodb://0.0.0.0:27017/', {
//     dbName: 'event_db',
//     useNewUrlParser: true,
//    // useUnifiedTopology: true 
// }).then(() => { console.log("Connection Successfull") })
// .catch((err) => { console.log("Received an Error ",err) });

//var MongoClient = require('mongodb').MongoClient

// const client = new MongoClient(uri, {monitorCommands: true});

// client.connect().then((client)=>{
//     var db = client.db('db_name')
//     db.collection('collection_name').find().toArray(function (err, result) {
//         if (err) throw err
//         console.log(result);
//     })
// })

//import { MongoClient } from 'mongodb';

// Enable command monitoring for debugging
const client = new MongoClient('mongodb://0.0.0.0:27017', { monitorCommands: true });
client.connect()
client.on('commandStarted', started => console.log(started));
client.db().collection('pets');
client.connect();

//client.insertOne({ name: 'spot', kind: 'dog' });



//test 
MongoClient.connect('mongodb://localhost:27017/blogdb', {useUnifiedTopology: true} , (err, client) =>
    {
      if (err) throw err;
      const db = client.db('blogdb');
      const collection = db.collection('posts');
      const users = db.collection('users');
      app.locals.collection = collection;
      app.locals.users = users;
    
    });