const mongoose=require('mongoose');
require('dotenv').config();
// mongodb+srv://yashguptag114:12345@cluster1.gnvffzy.mongodb.net/Codeutsava?retryWrites=true&w=majority&appName=Cluster1
mongoose.connect(MONGO_URL).then(()=>{
    console.log("connection succesfull");
}).catch((err)=>console.log("connection failed"));



//mongodb://127.0.0.1:27017/Codeutsava
