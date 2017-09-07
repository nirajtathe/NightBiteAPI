var mongoose=require('mongoose');
    Schema = mongoose.Schema;

var foodModel = new mongoose.Schema({
    title:{ type: String },
    restaurant: {type:String},
    //0:Veg 
    //1: Non-veg
    type: {type: Boolean , default:false},
    amount: {type:Number},
    image: {type: String}
});

module.exports= mongoose.model('Food',foodModel);