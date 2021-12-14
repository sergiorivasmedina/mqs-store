const mongoose = require('mongoose');
const URI = 'mongodb://sergio.rivas:pru3ba$@localhost:27017/mqs?authSource=admin';

mongoose.connect(URI)
  .then(db => console.log('MongoDB is connected'))
  .catch(error => {
      console.log("Error connecting MongoDB")
      console.error(error)
  });

module.exports = mongoose;