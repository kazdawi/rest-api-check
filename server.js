// require express
const express = require("express");
//require dotenv
require("dotenv").config();

//instance app
const app = express();
//middelware  bodyparser
app.use(express.json())
//connect to DB
const connectDB = require("./config/connectDB");
connectDB();
app.get('/test', (req, res) => {
    res.status(200).json('The test route is functionnal')
})

app.use('/api/contact', require('./routes/contact'))

//PORT
const PORT = process.env.PORT || 2500;

app.listen(PORT, (err) => {
    if (err) {
        console.error("Error starting the server:", err);
    } else {
        console.log(`The server is running on PORT: http://localhost:${PORT}`);
    }
});