const router=require('express').Router();
const {verifyToken,verifyTokenAndAutherization}=require('./verifyToken')

router.put('/:id',verifyTokenAndAutherization,async(req,res)=>{
    
})



module.exports=router