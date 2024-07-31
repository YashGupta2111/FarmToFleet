import React,{useState,useEffect} from 'react'
import './dashboard.css'
// import Updatedata from './update.js';

import { useNavigate} from 'react-router-dom';
export default function Productlist(props) {

  const [name,setname]=useState('');
  const [price,setprice]=useState('');
   const [currentproduct,setcurrentproduct]=useState(null);
  const [category,setcategory]=useState('');
  const [quantity,setquantity]=useState('');
  const [updatebutton2,setupdatebutton2]=useState(false);
  const [description,setdescription]=useState('');
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
 
    const [products,setproducts]=useState([]);
    const [updatebutton,setupdatebutton]=useState(false);
    const [tempid,settempid]=useState('');
    const navigate=useNavigate();
    useEffect(() => {
      const intervalId = setInterval(() => {
        const now = new Date();
        setCurrentDateTime(now);
        setCurrentDate(now.toLocaleDateString());
        setCurrentTime(now.toLocaleTimeString());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);

    const handleInputChangename = (e) => {
      const { name, value } = e.target;
      setcurrentproduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
      setname(e.target.value);
    };

    const handleInputChangeprice = (e) => {
      const { name, value } = e.target;
      setcurrentproduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
      setprice(e.target.value);
    };

    const handleInputChangequantity = (e) => {
      const { name, value } = e.target;
      setcurrentproduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
      setquantity(e.target.value);
    };

    const handleInputChangedescription = (e) => {
      const { name, value } = e.target;
      setcurrentproduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
      setdescription(e.target.value);
      
    };

    const handleInputChangeqcategory = (e) => {
      const { name, value } = e.target;
      setcurrentproduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
      setcategory(e.target.value);
    };
    
  
    useEffect(()=>{
        getproduct();
    },[])
    const updateit=async()=>{
     if(name==='') {setname(currentproduct.name);}
     if(category==='') { setcategory(currentproduct.category);}
     if(price==='') { setprice(currentproduct.price);}
     if(quantity==='') { setquantity(currentproduct.quantity);}
     if(description==='')  {setdescription(currentproduct.description);}
     setupdatebutton2(true);
    }
    const getproduct=async()=>
    {
   let result= await fetch('http://localhost:7134/getproduct');
   result=await result.json();
   setproducts(result);
    }
    const updateData=async(item)=>{

      const foundProduct = products.find((p) => p._id ===item);

      if (foundProduct) {
        setupdatebutton(true);
        setcurrentproduct(foundProduct);
      } else {
        setcurrentproduct(null);
      }
 
    
    }
    const deletedata=async(item)=>{
        let result=fetch(`http://localhost:7134/delete/${item}`,{
            method: 'DELETE',
        })
        window.location.reload();
    }
   const updatedatacarefully=async(item)=>{
  
         let result=await fetch(`http://localhost:7134/update/${currentproduct._id}`,{
            method:'PUT',
            body:JSON.stringify({name,quantity,price,category,description,currentDate,currentTime}),
            headers:{ 
              'Content-Type':'application/json'
           }}); 
           result=await result.json();
           console.log(result);
        }
   
  return (
  <>
   {  updatebutton===false?
    <div className="App ">
         <div className="Prod">
        <button className="addproduct4" onClick={()=>{navigate("/addproduct")}}>Add Product</button>
       <table className="Table">
        <tr >
            <td><h5><b>S.no</b></h5></td>
            <td><h5><b>Name</b></h5></td>
            <td><h5><b>Price</b></h5></td>
            <td><h5><b>Category</b></h5></td>
            <td><h5><b>Quantity</b></h5></td>
            <td><h5><b>Description</b></h5></td>
            <td><h5><b>TotalCost</b></h5></td>
            <td><h5><b>Date</b></h5></td>
            <td><h5><b>Time</b></h5></td>
            <td><h5><b>Update</b></h5></td>
            <td><h5><b>Delete</b></h5></td>
            
        </tr>
       {
        products.map((item,it)=>
        <tr key={item._id}>
            <td><h6>{it+1}</h6></td>
            <td><h6>{item.name}</h6></td>
            <td><h6>Rs {item.price}/Kg</h6></td>
            <td><h6>{item.category}</h6></td>
            <td><h6>{item.quantity} Kg</h6></td>
            <td><h6>{item.description}</h6></td>
            <td><h6>Rs {item.quantity*item.price}</h6></td>
            <td><h6>{item.currentDate}</h6></td>
            <td><h6>{item.currentTime}</h6></td>
            <td ><button className="updatedelete"  onClick={()=>updateData(item._id)}>Update</button></td>
            <td ><button className="proddelete" onClick={()=>deletedata(item._id)}>Delete</button></td>
            
            </tr>)      
       } 
    
        </table>
        
       </div>
    </div>
      :
      currentproduct?
                <div className="container">
                 
      <h1>Update Product </h1>
      
      <form>
        
     
       <div >
        <label>
          <input type="text" name="name" value={currentproduct.name} placeholder="Product Name" onChange={handleInputChangename} />
        </label>
        <br />
        <label>
        
          <input type="text" name="category" value={currentproduct.category} placeholder="Product Category" onChange={handleInputChangeqcategory} />
        </label >
        <br />
        <label >
      
          <input type="number" name="price" value={currentproduct.price} placeholder="Product Price" onChange={handleInputChangeprice} />
        </label>
        <br />
        <label >
        
          <input type="number" name="quantity" value={currentproduct.quantity} placeholder="Product Quantity" onChange={handleInputChangequantity} />
        </label>
        <br />
        <label >
          <textarea name="description" value={currentproduct.description} placeholder="Product Description" onChange={handleInputChangedescription}></textarea>
        </label>
        <button onClick={updateit}>update</button>
        <br />
        </div>
      
       {updatebutton2? <button  style={{backgroundColor:"white"}} onClick={updatedatacarefully()} className='button'></button>:null}
      
      </form>
    </div>

    :null
    
      
} 
      </>
  )
    
}

