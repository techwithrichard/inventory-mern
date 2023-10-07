const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


const app = express()
const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 5001;


// connect database
mongoose.connect(MONGO_URI).then(()=>{
    app.listen(PORT, (req, res)=>{
        // res.send
        console.log(`Server running on port ${PORT}`)

    })
    console.log("Database Connected Successfully!")
})


