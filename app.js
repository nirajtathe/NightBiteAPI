var express=require('express'),
    mongoose=require('mongoose'),
    bodyParser=require('body-parser');

var db=mongoose.connect('mongodb://localhost/nightBiteAPI'); 
var Food= require('./models/foodModel');

var app=express();
var port=process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

foodRouter=require('./Routes/foodRoutes.js')(Food);

app.use("/api/foods",foodRouter);

app.get("/",function(req,res){
    res.send("Hi, Welcome to our NightBite Store!");
});

app.listen(port, function(){
    console.log("Server started on port(check1) : "+port);
});
