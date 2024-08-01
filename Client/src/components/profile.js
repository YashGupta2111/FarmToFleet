import React,{useState,useEffect} from 'react'
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './profile.css'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [email,setemail]=useState();
  const [FullName,setFullName]=useState();
  const [gender,setgender]=useState();
  const [city,setcity]=useState();
  const [number,setnumber]=useState();
 const [state,setstate]=useState();
 const [Title,setTitle]=useState();
  const [account,setaccount]=useState(true);
  const [updatebutton,setupdatebutton]=useState(false);
  // const [purchase,setpurchase]=useState([]);
 
  // let navigate=useNavigate();
  const storedArray = localStorage.getItem('user');
  const detail =JSON.parse(storedArray);
  const custname=detail.FullName;
  const [currentCustomer,setcurrentcustomer]=useState(detail);
 const [selectitle,setselectitle]=useState();
 const [selectgender,setselectgender]=useState();
 const [purchase,setpurchase]=useState([]);
//  const [localstro,setlocalstro]=useState(false);
 // let navigate=useNavigate();
 
 useEffect(()=>{
   getpurchase();
},[])


 const getpurchase=async()=>
{
let result= await fetch('https://farm-backend-khtx.onrender.com/getpurchases');
result=await result.json();
setpurchase(result);
}
const handleInputChangename = (e) => {
  {
  const { name, value } = e.target;
  setcurrentcustomer((prevProduct) => ({
    ...prevProduct,
    [name]: value,
  }));

  setFullName(e.target.value);
}

}

const handleInputChangeemail = (e) => {
  {
  const { name, value } = e.target;
  setcurrentcustomer((prevProduct) => ({
    ...prevProduct,
    [name]: value,
  }));
  setemail(e.target.value);
}
  
}


const handleInputChangecity = (e) => {
  {
  const { name, value } = e.target;
  setcurrentcustomer((prevProduct) => ({
    ...prevProduct,
    [name]: value,
  }));
  setcity(e.target.value);
}
 
}
  



const handleInputChangestate = (e) => {

 {  const { name, value } = e.target;
  setcurrentcustomer((prevProduct) => ({
    ...prevProduct,
    [name]: value,
  }));
  setstate(e.target.value);
}

 
}

const handleInputChangegender = (e) => {
  {
  const { name, value } = e.target;
  setcurrentcustomer((prevProduct) => ({
    ...prevProduct,
    [name]: value,
  }));
  setgender(e.target.value);
}
  
}
const handleInputChangenumber = (e) => {
  {
  const { name, value } = e.target;
  setcurrentcustomer((prevProduct) => ({
    ...prevProduct,
    [name]: value,
  }));
  setnumber(e.target.value);
}
  
}
const handleInputChangetitle = (e) => {
  {
  const { name, value } = e.target;
  setcurrentcustomer((prevProduct) => ({
    ...prevProduct,
    [name]: value,
  }));
  setTitle(e.target.value);
}
  
}
const handleSelectOption = (e) => {
  setselectitle(e.target.value);
  
};
const handleSelectOptiongender=(e)=>{
  setselectgender(e.target.value);
}
const Updatedetails=async(item)=>{
  setTitle(selectitle);
  setgender(selectgender);
  updatedatacarefully(item);
}
const updatedatacarefully=async(item)=>{
  
  let result=await fetch(`https://farm-backend-khtx.onrender.com/updatedetails/${currentCustomer._id}`,{
   method:'PUT',
   body:JSON.stringify({FullName,gender,city,state,email,Title,number}),
   headers:{ 
     'Content-Type':'application/json'
  }}); 
  result=await result.json();
  console.log(result);
  setupdatebutton(false);


  alert("Detail Updated");
  window.location.reload();
  }
  useEffect(()=>{
    
    getproduct();
    
},[])
const getproduct=async()=>
{
let result= await fetch(`https://farm-backend-khtx.onrender.com/getcustomerdetails/${detail.email}`);
result=await result.json();
setcurrentcustomer(result);

}

  return (
    <div className='good'>
     <div class="sidenav">
     <Link className="sidebarnav" onClick={()=>setaccount(true)}>Account</Link>
     <Link  className="sidebarnav" onClick={()=>setaccount(false)}>Purchases</Link>
       </div>
      <div className="profilecontent">
      {account?

      <div className="details">
        {updatebutton===false?<button className='updateusername' onClick={()=>setupdatebutton(true)}>Edit</button>:null}
       <div className="detail-category">
      <div className="detail-item">
        <span className="label">Name</span>
        <span className="value"><input type="text" name="name"  value={currentCustomer.FullName} onChange={handleInputChangename}/></span>

      </div>
      <div className="detail-item">
        <span className="label">Gender</span>
        <span className="value"><input type="text" name="gender"  value={currentCustomer.gender} onChange={handleInputChangegender}/>
    </span>

      </div>
      <div className="detail-item">
        <span className="label">Mobile Number</span>
        <span className="value"><input type="number" name="number"  value={currentCustomer.number} onChange={handleInputChangenumber}/></span>

      </div>
      <div className="detail-item">
        <span className="label">City</span>
        <span className="value"><input type="text" name="city"  value={currentCustomer.city} onChange={handleInputChangecity}/></span>

      </div>
      <div className="detail-item">
        <span className="label">State</span>
        <span className="value"><input type="text" name="state"  value={currentCustomer.state} onChange={handleInputChangestate}/></span>

      </div>
      <div className="detail-item">
        <span className="label">Email</span>
        <span className="value"><input type="text" name="email"  value={currentCustomer.email} onChange={handleInputChangeemail}/></span>

      </div>
      <div className="detail-item">
        <span className="label">Title</span>
        <span className="value"> 
  <input
    type="text"
    name="title"
    value={currentCustomer.Title}
  />
 </span>

      </div>
     {updatebutton? <button className="login-button" onClick={()=>{Updatedetails(currentCustomer._id)}}>Update Details</button>:null}
     
    </div>

      
     
     
      </div>:
        <div className="profile-purchase">
           <div className="goodprofilepurchase">
         <div className="purchasecustomer">
      
        
       <table >
        <tr style={{backgroundColor:"darkgrey"}} >
            {/* <td><b>S.no</b></td>
            <td><b>Customer Name</b></td> */}
            <td><b>Name</b></td>
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
        <tr key={item._id} style={{backgroundColor:"#EBE9EF"}}> 
          {custname===item.customername?<>
            {/* <td><h6>{item.customername}</h6></td> */}
            <td><h6>{item.name}</h6></td>
            <td><h6>Rs {item.price}</h6></td>
            <td><h6>{item.category}</h6></td>
            <td><h6>{item.quant} Kg</h6></td>
            <td><h6>{item.description}</h6></td>
            <td><h6>{item.destination}</h6></td>
            <td><h6>Rs {item.transportationcost}</h6></td>
            <td ><h6 style={{ fontWeight: 'bold' }}>Rs {item.totalcost}</h6></td>
            <td><h6>{item.currentDate}</h6></td>
            <td><h6>{item.currentTime}</h6></td>
            </>:null}
            
            
            </tr>)      
       } 
    
        </table>
        
       </div>
    </div>
        </div>
      }
</div>
    </div>
  )
}
