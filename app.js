// require modules
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const inventoryRoutes = require('./server/routes/inventoryRoutes');

const app = express();

// connect to database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", err => console.log(err.message));
db.once("open", () => {
    //start the app server
    app.listen(process.env.PORT, process.env.HOSTNAME, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
});

app.use(express.json());

// set up routes
app.use('/inventory', inventoryRoutes);

app.use((req, res) => {
    res.status(404).json({ message: `The server cannot locate resource. Please try again with appropriate endpoints!` });
});

app.use((err, req, res) => {
    console.log(err.message);
    if (!err.status) {
        err.status = 500;
        err.message = ("Internal Server Error");
    }
    res.status(err.status).json(err.message);
});
