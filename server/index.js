// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:12727/ai-real-estate-friend');

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });

// const listingSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   address: String,
//   city: String,
//   state: String,
//   zip: String,
//   price: Number,
//   image: String
// });

// const Listing = mongoose.model('Listing', listingSchema);

// app.get('/api', async (req, res) => {
//   try {
//     const listings = await Listing.find();
//     res.json(listings);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

const { MongoClient, ServerApiVersion } = require("mongodb");
// Replace the placeholder with your Atlas connection string
const uri = "mongodb://0.0.0.0:27017";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);