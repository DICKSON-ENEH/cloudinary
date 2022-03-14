require("dotenv").config()
const express = require("express")
const port = process.env.PORT||3000
const mongoose = require("mongoose")
const myRoute = require ("./Router/router")
const app = express()
const url = process.env.ATLASURL
mongoose.connect(url).then(()=>{

    console.log("connected")
}).catch((error)=>{
    console.log(error.message)
})

app.use(express.json())
app.use("/api", myRoute)
app.use("/", express.static("uploads"))


app.listen(port,()=>{
    console.log("app is running on ", port)
})