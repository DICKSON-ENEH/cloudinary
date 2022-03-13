const mongoose =  require ("mongoose")

const schoolSchema= mongoose.Schema({
    schoolName:{
        type:String,
        required: true,
        unique:true
    },
    schoolLocation:{
        type:String,
        required: true,
        unique:true
    },
    schoolImage:{
        type:String
    
    },
    createdAt:{
        type: Date,
        default:new Date
          
    },
    imageURL:{
        type:String,
        
    },
    imageID:{
        type:String,
    
    }
})

const datas = mongoose.model("schools", schoolSchema)

module.exports= datas

