const mongoose=require('mongoose')

const ProductSchema=mongoose.Schema(
    {
        title:{type:String,requered:true,},
        desc:{type:String,requered:true,},
        img:{type:String,requered:true,},
        catogory:{type:Array},
        size:{type:String,},
        color:{type:String},
        price:{type:String,requered:true,},

        
    },
    {timeStamp:true}    
)
module.exports=mongoose.Schema('Product',ProductSchema)