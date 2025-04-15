const dbCon = require('./src/config/dbCon');
const {app} = require('./src/server');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    dbCon()
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
});