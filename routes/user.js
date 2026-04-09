const {Router} = require("express")
const userRouter = Router();


    userRouter.post('/signup',function(req,res){
        res.json({
        message:"hi"
        })
    })


    app.post('/signin',function(req,res){
        res.json({
            message:"hi"
        })
    })

    app.get('/purchases',function(req,res){
        res.json({
            message:"hi"
        })
    })


module.exports = {
    userRouter:userRouter
};