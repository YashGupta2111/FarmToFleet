import React,{useState,useEffect} from 'react'
import './login.css'
import {

  Link
} from "react-router-dom";

import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [FullName,setFullName]=useState('')
  const [email,setemail]=useState('');
  const [Title,settitle]=useState('Warehouse Manager');
  const [password,setpassword]=useState('');
  const [confirmpassword,setconfirmpassword]=useState('');
  const [error,seterror]=useState();
  const [currentSlide, setCurrentSlide] = useState(1);
 let navigate=useNavigate();
  const handleNextClick = () => {
    if(confirmpassword!==password){
      seterror(true);
    }else{
    setCurrentSlide((prevSlide) => (prevSlide % 3) + 1); // Assuming there are 3 slides, adjust as needed
  }};
  
  const Createaccount=async()=>{
    if(email.length>0)
    {
      let result=await fetch("https://farm-backend-khtx.onrender.com/signup",{
        method:'post',
        body:JSON.stringify({FullName,email,password,Title}),
        headers:{ 
          'Accept': 'application/json',
          'Content-Type':'application/json'
      }  
      })
    ;
      result=await result.json();
      localStorage.setItem("user",JSON.stringify(result));
      console.log(result);
       navigate('/profile')
      
      
  if(result.email)
  {    

    alert("Sign Up Successfully"); 
  }
  navigate("/home") 
     }else{
      alert("Please enter the details");
     } }
  
  const logincompleted=async()=>{
    let result=await fetch("https://farm-backend-khtx.onrender.com/login",{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{ 
          'Accept': 'application/json',
          'Content-Type':'application/json'
      }  
      });
      result=await result.json();
      
      if(result.email){
        localStorage.setItem("user",JSON.stringify(result));
       

        navigate("/home");
        console.log(result);
      }else{
        alert("Please enter correct details")
      }
      
  }
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth) {
      navigate('/home');
    }
  }  ) 
  return (
 
 <>
 <div className="login-container">
  <div className="control">
 <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${(currentSlide - 1) * 100}%)`,
        }}
      >
        <div className="slide"> 
        <div className="welcome-page">
 <h1 className="welcome-content" style={{color:"white",fontSize:"50px"}}>Welcome to our website</h1>
 <h4  className="welcome-content"style={{color:"white",fontSize:"15px"}}>Welcome to a seamless online experience! Explore, engage,<br/> and discover the possibilities on our user-friendly website</h4>
 <button  className='letget' onClick={handleNextClick}>Let's get Started - &gt;</button>
 
 </div></div>
        <div className="slide">
          <div className="login-page">
    
    <h1 style={{color:"white"}}>Log In </h1>
    <input className="login-input" value={email} type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)} />
    <input className="login-input" value={password} type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} />
    <br/>
  <Link  style={{color:"white"}} className="FORGOT" >Forgot Password?</Link>
  <br/>   <br/>
    <button className="login-button" onClick={logincompleted}>Login</button>
    <h4 style={{color:"white"}}>Don't have an Account?<br/><button  className="sign-up-button"onClick={handleNextClick}>Sign Up</button></h4>
  </div></div>
        <div className="slide">
        <div className="sign-page">
    {/* <h1 style={{color:"white"}}>Sign-up </h1> */}
   
    <input className="login-input" value={FullName} type="name" placeholder="Full Name" onChange={(e)=>setFullName(e.target.value)} required />
    <input className="login-input" value={email} type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)} required />
 
    <input className="login-input" value={password} type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}  required />
   
    <input className="login-input" value={confirmpassword} type="password" placeholder="Confirm Password"onChange={(e)=>setconfirmpassword(e.target.value)} required  />
    
    <select
        className="login-input"
        value={Title}
        onChange={(e)=>settitle(e.target.value)}
      >
        <option value="Warehouse Manager">Warehouse Manager</option>
        <option value="Destributor">Destributor</option>
       
      </select>
    {error===true?<h6 className="password-error">Password does not match</h6>:null}

    <button className="sigin-button"  onClick={Createaccount}>Create Account</button>
</div>
          </div>
      
  
     </div>
       </div>
      </div>
      </div>


  
      
 </>
  )
}
