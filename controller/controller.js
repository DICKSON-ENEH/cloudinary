const schoolModel = require("../model/model")
const cloudinary = require ("../cloudinary/cloudinary")
const fs = require("fs")



const creating= async(req,res)=>{
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        const createSchools = await schoolModel.create({
          schoolName:req.body.schoolName,
          schoolLocation:req.body. schoolLocation,
          schoolImage:req.file.path,
          imageURL:result.secure_url,
          imageID:result.public_id
        })
        res.status(201).json({message:"success" , data :{createSchools}})
    } catch (error) {
        console.log(error.message)
    }
}

const finding = async(req, res)=>{
try {
    const getall = await schoolModel.find()
    res.status(200).json({success:"successful", data:{
      getall
    }})
} catch (error) {
    console.log(error.message)
}

}

const findingWithId = async (req, res)=>{
try {
    const findOne = await schoolModel.findById(req.params.id)
    res.status(200).json({success:"successful", data:{
        findOne
      }})
} catch (error) {
    console.log(error.message)
}
} 
 const updates = async(req, res)=>{

    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        const updateOne= await schoolModel.findByIdAndUpdate(req.params.id , {
            schoolName:req.body.schoolName,
            schoolLocation:req.body.schoolLocation,
            schoolImage:req.file.path,
            imageURL:result.secure_url,
            imageID:result.public_id
        }, {new:true})  
        res.status(200).json({success:"successful", data:{
            updateOne
          }})
        
    } catch (error) {
        console.log(error.message)
    }
 }

 const deleting = async (req, res)=>{
     try {
      const id = req.params.id
        const school = await schoolModel.findById(id)
        await cloudinary.uploader.destroy(school.imageID)
        await fs.unlinkSync(school.schoolImage)
        const deleted = await schoolModel.findByIdAndDelete(id) 
        res.status(204).json({success:"successful" ,
        data:"deleted"
        
     }) 
    
    } catch (error) {
        console.log(error.message) 
     }
 }


module.exports={
    creating,
     finding,
     findingWithId,
     updates,
     deleting
}