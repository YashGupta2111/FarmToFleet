import React, { useState,useEffect } from 'react';
import './addproduct.css';
import { useNavigate } from 'react-router-dom';
const ProductForm = () => {
    const [name,setname]=useState('');
    const [price,setprice]=useState('');
    
    const [category,setcategory]=useState('');
    const [quantity,setquantity]=useState('');
    const [description,setdescription]=useState('');
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    let navigate=useNavigate();
    useEffect(() => {
      const intervalId = setInterval(() => {
        const now = new Date();
        setCurrentDateTime(now);
        setCurrentDate(now.toLocaleDateString());
        setCurrentTime(now.toLocaleTimeString());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  const getdata=async()=>
  {
  let result=await fetch("https://farm-backend-1.onrender.com/add-product",{
    method:'post',
    body:JSON.stringify({name,quantity,price,category,description,currentDate,currentTime}),
    headers:{ 
      'Accept': 'application/json',
      'Content-Type':'application/json'
  }  
  });
  result=await result.json();
  console.log(result);
  if(result.name)
  {
    alert("Product Added"); 
  }
  navigate("/dashboard");
  }
 
  
  
  return (<>
  
    <div className="container">
      
      <h1>Product Form</h1>
      <form>
        <label>
         
          <input type="text" name="name" value={name} placeholder="Product Name" onChange={(e)=>setname(e.target.value)} />
        </label>
        <br />
        <label>
        
          <input type="text" name="category" value={category} placeholder="Product Category" onChange={(e)=>setcategory(e.target.value)} />
        </label>
        <br />
        <label>
      
          <input type="number" name="price" value={price} placeholder="Product Price" onChange={(e)=>setprice(e.target.value)} />
        </label>
        <br />
        <label>
        
          <input type="number" name="quantity" value={quantity} placeholder="Product Quantity" onChange={(e)=>setquantity(e.target.value)} />
        </label>
        <br />
        <label>
          <textarea name="description" value={description} placeholder="Product Description" onChange={(e)=>setdescription(e.target.value)}></textarea>
        </label>
        <br />
        <button onClick={getdata} className='button'>Add Product</button>
      </form>
    </div>
   
   
    </>
  );
};

export default ProductForm;
