import React,{useState,useEffect} from 'react'
import './dashboard.css'
// import { useNavigate} from 'react-router-dom';

export default function    Purchases() {
  const [purchase,setpurchase]=useState([]);
  // let navigate=useNavigate();

  useEffect(()=>{
    getproduct();
},[])


  const getproduct=async()=>
{
let result= await fetch('https://farm-backend-khtx.onrender.com/getpurchases');
result=await result.json();
setpurchase(result);
}
  return (
    <>
      <div className="App ">
         <div className="Prod">
      
        
       <table className="Table" style={{position:'relative',right:'100px',top:'-50px'}}>
        <tr >
            <td><b>S.no</b></td>
            <td><b>Customer Name</b></td>
            <td><b>Product Name</b></td>
            <td><b>Price</b></td>
            <td><b>Category</b></td>
            <td><b>Quantity</b></td>
            <td><b>Description</b></td>
            <td><b>Destination</b></td>
            <td><b>Transportation Cost</b></td>
            <td><b>TotalCost</b></td>
            <td><b>Date</b></td>
            <td><b>Time</b></td>
           
        </tr>
       {
        purchase.map((item,it)=>
        <tr key={item._id}>
            <td><h6>{it+1}</h6></td>
            <td><h6>{item.customername.length > 10 ? item.customername.substring(0, 7) + '...' : item.customername}</h6></td>
            <td><h6>{item.name}</h6></td>
            <td><h6>Rs {item.price}</h6></td>
            <td><h6>{item.category.length>10?item.category.substring(0,7)+'...':item.category}</h6></td>
            <td><h6>{item.quant} Kg</h6></td>
            <td><h6>{item.description.length>10?item.description.substring(0,7)+'...':item.description}</h6></td>
            <td><h6>{item.destination}</h6></td>
            <td><h6>Rs {item.transportationcost}</h6></td>
            <td><h6 style={{ fontWeight: 'bold' }}>Rs {item.totalcost}</h6></td>
            <td><h6>{item.currentDate}</h6></td>
            <td><h6>{item.currentTime}</h6></td>
            
            
            </tr>)      
       } 
    
        </table>
        
       </div>
    </div>
  
    </>
  )
}
