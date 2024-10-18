const mongoose = require('mongoose');

// MongoDB connection

const dbConnection = () => {
    
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((mongoObject) => {console.log('MongoDB connected...')
       return mongoObject
    })
    .catch(err =>{ console.log(err)
       return err
    })

   
}


module.exports = {dbConnection}