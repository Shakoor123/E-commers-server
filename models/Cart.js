const mongoose=require('mongoose')

const CartSchema=mongoose.Schema(
    {
        userId:{type:String,requered:true,},
        products:[
            {
                productId:{type:String},
                quantity:{type:Number,default:1}
            }
        ]
        
    },
    {timeStamp:true}    
)
module.exports=mongoose.Schema('Cart',CartSchema)