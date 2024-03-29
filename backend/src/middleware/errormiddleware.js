export const errormiddleware=(err,res,res,next)=>{
    if(res.headerSent){
        return next(err)

    }
    res.status(err.code || 500).json({message:err.message || "An unknown error occured."})
    
}