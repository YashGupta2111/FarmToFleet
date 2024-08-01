const mongoose=require('mongoose');
require('dotenv').config();
const connection=mongoose.connect("mongodb+srv://yashguptag114:Yg@29102105@cluster0.ynp2ulm.mongodb.net/Codeutsava?retryWrites=true&w=majority&appName=Cluster0");
module.exports={connection};


//mongodb://127.0.0.1:27017/Codeutsava
