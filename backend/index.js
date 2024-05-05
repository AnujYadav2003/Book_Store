import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
//import{ Book } from "./models/bookmodel.js";
import booksroute from "./routes/booksroute.js";
const app = express();
//middleware for parsing request body---
app.use(express.json());
require('dotenv').config()
//middlewarre for handling cors policy
//option1:Allow all origin with default of cors(*)
app.use(cors());
app.get("/", function (req, res) {
    console.log(req);
    return res.status(234).send("Welcome to MERN Stack Tutorial")
})

app.use("/books", booksroute)

//to connect database
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("DataBase connected properly");
        //i want only my express server runs when database is connected properly--
        app.listen(process.env.PORT, () => {
            console.log(`App is working fine on:${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })