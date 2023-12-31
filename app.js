require("dotenv").config();
const express = require("express")
const app = express();
const mongoose = require("mongoose")
require("./db/conn");
const users = require("./model/userSchema")
const cors = require("cors")
const PORT = process.env.PORT || 8006
const router = require("./routes/route")

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log("server is start on Port 8006")
})

