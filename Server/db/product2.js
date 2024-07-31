const mongoose=require('mongoose');
const prodschema2=new mongoose.Schema({
    customername:String,
    name:String,
    price:Number,
    category:String,
    quant:Number,
    transportationcost:Number,
    totalcost:Number,
    city:String,
    description:String,
    currentDate:String,
    currentTime:String,
    destination:String,
});
module.exports=mongoose.model('purchases',prodschema2)