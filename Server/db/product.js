const mongoose=require('mongoose');


const prodschema=new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    quantity:Number,
    description:String,
    currentDate:String,
    currentTime:String
});

module.exports=mongoose.model('warehouse',prodschema)