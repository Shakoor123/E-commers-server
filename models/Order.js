const mongoose=require('mongoose')

const OrderSchema=mongoose.Schema(
    {
        userId:{type:String,requered:true,},
        products:[
            {
                productId:{type:String},
                quantity:{type:Number,default:1}
            },
        ],
        amount:{type:Number,requered:true},
        address:{type:Object,requered:true},
        sratus:{type:String,default:"pending"}

        
    },
    {timeStamp:true}    
)
module.exports=mongoose.Schema('Order',OrderSchema)