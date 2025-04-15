const dbCon = require('./src/config/dbCon');
const {app} = require('./src/server');
const mongoose = require('mongoose');


app.listen(3000, () => {
    console.log('Server on port 3000');
    dbCon()
})