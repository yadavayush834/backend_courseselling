function createCourseRoutes(app){

app.post('/course/purchase',function(req,res){
    res.json({
        message:"hi"
    })
})
app.get('/course/preview',function(req,res){
    res.json({
        message:"hi"
    })
})
}

module.exports = {
    createCourseRoutes:createCourseRoutes
}