const multer = require ("multer")
const path = require("path")


const storage = multer.diskStorage({
    destination :(req,file,cb)=>{
        cb(null, "./uploads")
    },
    filename:(req, file, cb)=>{
     cb(null, file.originalname)
    }
})

const fileFilter=(req,file,cb)=>{
  const ext = path.extname(file.originalname)
  if(ext !== ".png" || ext !==".jpeg" || ext !==".jpg", ext !==".JPEG"){
   cb(null, new Error ("unsupported file format"), false)
  }else{
      cb(null, true)
  }
}

const imageUploader =multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024*1024*20
    }
}).single("schoolImage")

module.exports= imageUploader