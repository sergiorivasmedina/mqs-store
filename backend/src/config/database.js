const mongoose = require('mongoose');
const URI = process.env.MONGO_DB_URI;

mongoose.connect(URI)
  .then(db => console.log('MongoDB is connected'))
  .catch(error => {
      console.log("Error connecting MongoDB")
      console.error(error)
  });

module.exports = mongoose;