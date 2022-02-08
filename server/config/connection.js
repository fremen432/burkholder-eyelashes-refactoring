const mongoose = require('mongoose')

mongoose.connect(
    // this is where the database is located
    process.env.MONGODB_URI || 'mongodb://localhost/burkholder-eyelashes', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;