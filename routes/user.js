function createUserRoutes(app){
    app.post('/user/signup',function(req,res){
        res.json({
        message:"hi"
        })
    })


    app.post('/user/signin',function(req,res){
        res.json({
            message:"hi"
        })
    })

    app.get('/user/purchases',function(req,res){
        res.json({
            message:"hi"
        })
    })

}

module.exports = {
    createUserRoutes:createUserRoutes
};