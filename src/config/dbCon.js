const mongoose = require('mongoose');

const dbCon = async () => {
    try {
        await mongoose.connect('mongodb+srv://Maximiliano:FTVxsVoNiVZEXnRl@moviesdata.hgc9u.mongodb.net/GiftList', {
        });
        console.log('Connected to MongoDB database');
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = dbCon;