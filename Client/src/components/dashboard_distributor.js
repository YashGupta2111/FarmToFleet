import React,{useState,useEffect} from 'react'
import './dashboard.css'
// import Updatedata from './update.js';

import { useNavigate} from 'react-router-dom';
export default function Productlist(props) {
     const [buyoption,setbuyoption]=useState(true);
     const [currentproduct,setcurrentproduct]=useState(null);
     const [quantity2,setquantity2]=useState('');
     const [buy,setbuy]=useState(false);
     const [bill,setbill]=useState(false);
     const [bill2,setbill2]=useState(false);
     const [updatewarehouse,setupdatewarehouse]=useState(false);
     const [prevquantity,setprevquantity]=useState('')
     let [distance,setDistance]=useState(0);
     const [continue1,setcontinue1]=useState(true);
     const [continue2,setcontinue2]=useState(false);
    const [products,setproducts]=useState([]);
    const [error,seterror]=useState(false);
    const [name,setname]=useState('');
    const [price,setprice]=useState('');
    const [destination,setdestination]=useState('');
    const [totalcost,settotalcost]=useState('');
    const [category,setcategory]=useState('');
    const [remainquantity,setremainquantity]=useState('');
    const [cityName, setCityName] = useState('');
  
    const [quant,setquant]=useState('');
    const [description,setdescription]=useState('');
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [button4,setbutton4]=useState(false);
    const [transportationcost,settransportationcost]=useState(0);
    const storedArray = localStorage.getItem('user');
    const detail =JSON.parse(storedArray);
    const [errorfornotentery,seterrorfornotentery]=useState(false);
    const [customername,setcustomername] = useState(detail.FullName);
    const [city,setcity] = useState(detail.city);
  
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

    useEffect(()=>{
        getproduct();
        
    },[])
    const setquantitynew2=async(e)=>{
setquantity2(e.target.value);
errorfornotentery(false);
    }
    const getproduct=async()=>
    {
   let result= await fetch('https://farm-backend-1.onrender.com/getproduct');
   result=await result.json();
   setproducts(result);
    }
    const buyData=async(item)=>{
       setbuyoption(false);
       const foundProduct = products.find((p) => p._id ===item);

       if (foundProduct) {
         setcurrentproduct(foundProduct);
         
       } else {
         setcurrentproduct(null);
       }
      
    }
   const getdetail2=async()=>{
    
    if(destination.length===0){
      seterrorfornotentery(true);
    }else{
      
      settotalcost(Math.round(quantity2*currentproduct.price+transportationcost));
      seterrorfornotentery(false);
      setbill2(true);
      setbuy(true)
      setcontinue2(false);
    
    }
   }
   useEffect(() => {
  
    if (bill2===true) {
      console.log("hello");
        handleSubmit();
    }
}, );
console.log(distance);
    const updatedatacarefully=async(quantity)=>{
      let result=await fetch(`https://farm-backend-1.onrender.com/update/${currentproduct._id}`,{
         method:'PUT',
         body:JSON.stringify({quantity}),
         headers:{ 
           'Content-Type':'application/json'
        }}); 
        result=await result.json();
        console.log(result);
        
        navigate("/purch")
     }
     const calculateDistance = (lat1, lon1, lat2, lon2) => {
      if (
          typeof lat1 !== 'number' || typeof lon1 !== 'number' ||
          typeof lat2 !== 'number' || typeof lon2 !== 'number'
      ) {
          console.error('Invalid inputs:', { lat1, lon1, lat2, lon2 });
          return null;
      }
  
      const R = 6371; 
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distancee = R * c;
      return distancee;
  };
  
    const deletedata=async(item)=>{
        let result=fetch(`https://farm-backend-1.onrender.com/delete/${item}`,{
            method: 'DELETE',
        })
        window.location.reload();
        if(result.acknowledged===true)
       {
        alert("Product Deleted");
        navigate("/product");
        navigate("/");
       
       getproduct();
      }
    }
    const handleSubmit = async (e) => {
     
      
      try {
        console.log(destination);
          const response = await fetch(`https://farm-backend-1.onrender.com/city/${destination}`);
          if (!response.ok) {
              throw new Error('City not found');
          }
          const city = await response.json();
          const raipurLat = 21.2514;
          const raipurLon = 81.6296;
          console.log(raipurLat, raipurLon, city.Lat, city.Long);
          const distancer = calculateDistance(raipurLat, raipurLon, city.Lat, city.Long);
          settransportationcost(Math.round(distancer.toFixed(2))*25);
          settotalcost(Math.round(quantity2*currentproduct.price+transportationcost));
      } catch (error) {
        
      }
  };
   const getdetail=async()=>{
       if(quantity2>currentproduct.quantity)
       {
         seterror(true);
       }else if(quantity2.length===0)
       {
        seterrorfornotentery(true)
       }else{
        setprevquantity(currentproduct.quantity);
       setname(currentproduct.name);
       setprice(currentproduct.price);
       setcategory(currentproduct.category);
      
       settotalcost(Math.round(quantity2*currentproduct.price+transportationcost));
       setdescription(currentproduct.description);
       setquant(quantity2);
     setremainquantity(currentproduct.quantity-quantity2);
     setcontinue2(true);
        setbill(true);
        setcontinue1(false);
       }
   }
   const getdata=async()=>
   {  
    
    
   let result=await fetch("https://farm-backend-1.onrender.com/purchases",{
     method:'post',
     body:JSON.stringify({customername,destination,name,quant,price,city,transportationcost,category,description,currentDate,currentTime,totalcost}),
     headers:{ 
       'Accept': 'application/json',
       'Content-Type':'application/json'
   } 
   });
   result=await result.json();
   console.log(result);
        //  workonprogress();
         updatedatacarefully(currentproduct.quantity-quantity2);
         navigate("/dashboard");
   }
   

   
  return (
    <>
    {buyoption?
    <div className="App ">
         <div className="Prod">
     
       <table className='Table' style={{position:'relative', top:'-40px'}}>
        <tr >
            <td><b>S.no</b></td>
            <td><b>Name</b></td>
            <td><b>Price</b></td>
            <td><b>Category</b></td>
            <td><b>Available</b></td>
            <td><b>Description</b></td>
            <td><b>Buy</b></td>
        </tr>
       {
        products.map((item,it)=>
        <tr key={item._id}>
            <td><h6>{it+1}</h6></td>
            <td><h6>{item.name}</h6></td>
            <td><h6>Rs {item.price}/KG</h6></td>
            <td><h6>{item.category}</h6></td>
            <td><h6>{item.quantity} Kg</h6></td>
            <td><h6>{item.description}</h6></td>
            <td ><button className="buy" onClick={()=>buyData(item._id)}><h6>Buy</h6></button></td>
            
            
            </tr>)      
       } 
       
        </table>
        
       </div>
    </div>
    :
    currentproduct?
    <div className="container3">
                 
    {/* <h1 style={{fontSize:"50px"}}> Product Details</h1> */}
    <div className='currentproduct_table' >
     
    <div className="form-table">

    <div className="form-row">
    <div className="label"><b><h3>Customer Name</h3></b></div>
    <div className="value"><b><h3>{customername}</h3></b></div>
  </div>
  <div className="form-row">
    <div className="label"><b><h3>Product Name</h3></b></div>
    <div className="value"><b><h3>{currentproduct.name}</h3></b></div>
  </div>
  <div className="form-row">
    <div className="label"><b><h3>Category</h3></b></div>
    <div className="value"><b><h3>{currentproduct.category}</h3></b></div>
  </div>
  <div className="form-row">
    <div className="label"><b><h3>Price</h3></b></div>
    <div className="value"><b><h3> Rs {currentproduct.price}</h3></b></div>
  </div>
  <div className="form-row">
    <div className="label"><b><h3>Description</h3></b></div>
    <div className="value"><b><h3>{currentproduct.description}</h3></b></div>
  </div>
  {bill && (
    <div className="form-row">
      <div className="label"><b><h3>Quantity</h3></b></div>
      <div className="value"><b><h3>{quantity2} Kg</h3></b></div>
    </div>
  )}
   {bill2 && (
    <div className="form-row">
      <div className="label"><b><h3>Destination</h3></b></div>
      <div className="value"><b><h3>{destination}</h3></b></div>
    </div>
  )}
  {bill2 && (
    <div className="form-row">
      <div className="label"><b><h3>Transportation Cost</h3></b></div>
      <div className="value" ><b><h3>Rs {transportationcost}</h3></b></div>
    </div>
  )}
  {bill2 && (
    <div className="form-row">
      <div className="label"><b><h3>Total Amount</h3></b></div>
      <div className="value"><b><h3>Rs {totalcost}</h3></b></div>
    </div>
  )}
  

  
      {continue1===true? 
        <div className="form-row"> 
      <div className="label" ><b><h3>Add Quantity</h3></b></div>
      <div className="value"><b><h3> <input  className="productquantity" type="number" name="quantity" value={quantity2} placeholder="Product Quantity" onChange={(e)=>setquantity2(e.target.value)}/>Kg</h3></b>
        {error===true? <h6 className="error-error">Requested quantity exceeds available quantity</h6>:null}
        {errorfornotentery===true? <h6 className="error-error">Please enter Quantity</h6>:null}
      </div></div>:null}
      {continue2===true? 
        <div className="form-row"> 
      <div className="label" ><b><h3>Destination</h3></b></div>
      <div className="value"><b><h3> <input  className="productquantity" type="destination" name="destination" value={destination} placeholder="destination" onChange={(e)=>setdestination(e.target.value)}  /></h3></b>
        {errorfornotentery===true? <h6 className="error-error">Please enter Destination</h6>:null}
      </div></div>:null}
      </div>
      </div>
  {continue1===true?  <buttonn className='buybutton' onClick={getdetail}>Next</buttonn>:null}
  {continue2===true?  <button className='buybutton' onClick={getdetail2}>Next</button>:null}
    {buy===true?  <button className='buybutton' onClick={getdata}>Proceed to Payment</button>:null}
  </div>
  
:null}
    </>
  )
}
