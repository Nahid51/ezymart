const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;

// route call
const authRoute = require("./routes/auth.route.js");
const userRoute = require("./routes/user.route.js");


// database connection
const connect = async () => {
    const uri = `${process.env.DATABASE}`;
    try {
        await mongoose.set('bufferCommands', false);
        await mongoose.set('strictQuery', true);
        await mongoose.connect(uri);
        console.log("Database connected.");
    } catch (error) {
        console.log(`${error} did not connect.`)
    }
};


// middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);

app.use((error, req, res, next) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack
    })
});

app.get("/", (req, res) => {
    res.send("Document founded.");
});

app.listen(PORT, () => {
    connect();
    console.log("Server connected at port " + PORT);
});