const express = require("express")
const port = 3000
const mongoose = require("mongoose")
const myRoute = require ("./Router/router")
const app = express()
const url = "mongodb+srv://schools:Today@cluster0.xd5wm.mongodb.net/schooldb"
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