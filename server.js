const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const logger = require("morgan")

const cors = require("cors")
const mainRoute = require("./routes/index.js")

const app = express();
const port = 5000;

dotenv.config()

const connect = async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
       console.log("connected mongo");
    } catch (error) {
        throw error
    }
}

//middlewares
app.use(logger("dev"))
app.use(express.json());
app.use(cors())

app.use("/api",mainRoute)

app.listen(port,()=> {
    connect()
    console.log('Sunucu Çalıştı');
})