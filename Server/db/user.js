const mongoose=require('mongoose');
const prodschema2=new mongoose.Schema({
    FullName:String,
   email:String,
   password:String,
   gender:String,
   city:String,
   state:String,
   Title:String,
   number:Number
   
});
module.exports=mongoose.model('customerdetails',prodschema2)