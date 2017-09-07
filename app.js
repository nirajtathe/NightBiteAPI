var express=require('express'),
    mongoose=require('mongoose'),
    bodyParser=require('body-parser');

var db=mongoose.connect('mongodb://localhost/nightBiteAPI'); 
var food= require('./models/foodModel');

var app=express();
var port=process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var router=express.Router();

router.route("/foods")
    .post(function(req,res){
        var newFood=new food(req.body);

        console.log(newFood);
        res.send(newFood);
    })
    .get(function(req,res){
        
        var query= {};

        if(req.query.title){
            query.title=req.query.title;
        }
        food.find(function(err,foods){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.send(foods);
                console.log('#######found foll data: '+foods);
                console.log('#############');
            }
        });
    });


router.route("/foods/:foodId")
    .get(function(req,res){
       food.find(req.params.foodId, function(err,food){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.json(food);
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
