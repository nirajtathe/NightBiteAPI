var express=require('express'),
    mongoose=require('mongoose');

var db=mongoose.connect('mongodb://localhost/nightBiteAPI'); 
var food= require('./models/foodModel');

var app=express();
var port=process.env.PORT || 3000;

var router=express.Router();

router.route("/foods")
    .get(function(req,res){
        var query= req.query;
        food.find(query, function(err,foods){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.json(foods);
            }
        });
    });

app.use("/api",router);

app.get("/",function(req,res){
    res.send("Hi, its working (check2)!");
});

app.listen(port, function(){
    console.log("Server started on port(check1) : "+port);
});
