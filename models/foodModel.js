var mongoose=require('mongoose');
    Schema = mongoose.Schema;

var foodModel = new mongoose.Schema({
    title:{ type: String },
    restaurant: {type:String},
    //0:Veg 
    //1: Non-veg
    type: {type: Boolean , default:0},
    amount: {type:Number}
});

module.exports= mongoose.model('Food',foodModel);