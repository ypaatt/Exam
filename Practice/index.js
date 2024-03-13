const express = require('express');
const app = express();
const path = require("path");
const PORT = 4444;
const hbs = require("hbs");
const mongoose = require("mongoose");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use("/", require("./routes/cart"));

mongoose.connect('mongodb://127.0.0.1:27017/Cart')
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running on http://localhost:" + PORT);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
