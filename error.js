exports.handlePsqlError = (err, req,res, next) => {
    if(err.code ==="22P02") res.status(400).send({msg: 'bad error'})
    else next(err)
}

exports.invalidRouteHandler = (req,res,next) => {
    console.log("sfsdfasdf")
    // console.log(err, 'asddfsd')
   
    res.status(404).send({error:"Route doesn't exist"})
    
}