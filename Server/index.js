const express=require('express');
const app = express();
const cors=require('cors');
require('./db/config.js')
const User=require('./db/user.js'); 
const contact=require('./db/contact.js');
const Product=require('./db/product.js'); 
const Purchase=require('./db/product2.js')
const Destination= require('./db/destination.js')
app.use(express.json());
app.use(cors(
    {
        origin:["https://farm-to-fleet-frontend.vercel.app"],
        methods:["post", "put","get","delete"],
        credentials:true
    }
));
require('dotend').config();
app.get('/city/:name', async(req, res)=>{
    try {
        const city = await Destination.findOne({ City: req.params.name });
        if (!city) return res.status(404).send('City not found');
        res.json(city);
    } catch (err) {
        res.status(500).send(err.toString());
    }
});

app.post("/signup",async(req,resp)=>{
    if(req.body.email && req.body.password){
            let user=await User(req.body);
            let result =await user.save();
            result=result.toObject();delete result.password
            resp.send(result);
    }
    else{
        resp.send({result:"CNAT register"});
    }
})

app.put("/update/:_id",async(req,resp)=>{
    let result = await Product.updateOne(
         req.params,
        { $set: req.body }
    );
    
    resp.send(result);
});
app.put("/updatedetails/:_id", async (req, res) =>{
    let result = await User.updateOne(
        req.params ,
       { $set: req.body }
   );
    res.send(result);
  });
app.post("/login",async(req,resp)=>{
    if(req.body.password&&req.body.email)
    {
    let user=await User.findOne(req.body).select("-password");
    if(user)
    resp.send(user);
    else
    resp.send({result:"no user found"});
    }else
    {
        resp.send({result:"no user found"});
    }
})
app.post("/add-product",async(req,resp)=>{
    let product= new Product(req.body);
    let result=await product.save();
    resp.send(result);
})
// app.post("/contact",async(req,resp)=>{
//     let product= new contact(req.body);
//     let result=await product.save();
//     resp.send(result);
// })
app.post("/purchases",async(req,resp)=>{
    let product=new Purchase(req.body);
    let result=await product.save();
    resp.send(result);
})

app.get("/getproduct",async(req,resp)=>{
    let pro=await Product.find();
    if(pro.length>0)
    {
    resp.send(pro);
    }
    else
    {
        resp.send("No Product Find");
    }
})
app.get("/getcustomerdetails/:email",async(req,resp)=>{
    const userEmail= req.params.email;
    const user = await User.findOne({ email: userEmail });

    if (user) {
      resp.send(user);
    } else {
      resp.status(404).send('User not found');
    }
  
})
app.get("/getpurchases",async(req,resp)=>{
    let pro=await Purchase.find();
    if(pro.length>0)
    {
    resp.send(pro);
    }
    else
    {
        resp.send("No Product Find");
    }
})
app.delete("/delete/:id",async(req,resp)=>{
    const result=await Product.deleteOne({_id:req.params.id});
    resp.send(result);
})
app.get("/getproduct/:id",async(req,resp)=>{
    let pro=await Product.find({_id:req.params.id});
    if(pro.length>0)
    {
    resp.send(pro);
    }
    else
    {
        resp.send("No Product Find");
    }
})

app.listen(process.env.PORT);
