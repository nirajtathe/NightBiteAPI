var express=require('express');

var routes= function(food){

    foodRouter=express.Router();
    
    foodRouter.route("/")
        .post(function(req,res){
            var newFood=new food(req.body);
    
            newFood.save();
            
            res.status(201).send(newFood);
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
                    res.json(foods);
                }
            });
        });
    
    
    foodRouter.route("/:foodId")
        .get(function(req,res){
           food.findById(req.params.foodId, function(err,searchedFood){
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.json(searchedFood);
                }
            });
        });
    
    return foodRouter;
};

module.exports = routes;