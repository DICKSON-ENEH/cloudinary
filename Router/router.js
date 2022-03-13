const express = require ("express")
const route = express.Router()
const {creating, finding,findingWithId, updates, deleting}= require("../controller/controller")
const imageUploader=require("../multer/multer")

route.post("/post", imageUploader, creating)
route.get("/all",  finding)
route.get("/all/:id",  findingWithId)
route.patch("/all/:id",  imageUploader, updates)
route.delete("/all/:id",  deleting)

module.exports=route