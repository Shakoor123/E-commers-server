const mongoose=require('mongoose')

const UserSchema=mongoose.Schema(
    {
        username:{type:String,requered:true,unique:true},
        email:{type:String,requered:true,unique:true},
        password:{type:String,requered:true,},
        isAdmin:{
            type:Boolean,
            default:false,
        }
    },
    {timeStamp:true}    
)
module.exports=mongoose.Schema('User',UserSchema)