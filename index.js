const express = require('express');
const {createUserRoutes} = require("./user ")

const app = express();

createUserRoutes(app);


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
