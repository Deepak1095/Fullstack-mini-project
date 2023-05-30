

const auth=(req,res,next)=>{
    const token=req.headers.auth.split(" ")[1]
    if(token){
        try{
            const decoded = jwt.verify(token, 'india');
            if(decoded){
                next()
            }
            else{
                res.status(404).json({msg:"token not recognised"})
            }
        }
        catch(err){
            res.status(400).json({err:err.message})
        }
    }
    else{
        res.status(200).json({msg:"please login"})
    }
   
}