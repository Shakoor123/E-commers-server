const jwt=require('jsonwebtoken');


const verifyToken=(req,res,next)=>{
    const authHedder=req.hedders.token;
    if (authHedder) {
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            if (err) {
                res.status(401).json("token not valid");
            }else{
                req.user=user;
                next();
            }
        });
    }else{
        return res.status(401).json("you are not authenticated !");
    }
}

const verifyTokenAndAutherization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id=== req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json('you are not allowed !')
        }
    })
}

module.exports={verifyToken,verifyTokenAndAutherization}