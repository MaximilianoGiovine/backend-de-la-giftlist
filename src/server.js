const router = require ('./routes/router');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/GiftList', router);

// Catch-all route for undefined paths
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = {app};