const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8080;

// middleware
app.use(express.json());

// database connection
main().then(() => console.log("Database connected!"));
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.pf4kpjf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
}

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
app.get("/", (req, res) => res.send('Document founded'));