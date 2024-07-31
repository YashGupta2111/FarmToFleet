import React from 'react'
import Image1 from './images/Company-Logo.png';
import './nav.css'
import {
  BrowserRouter as Router,
  
  Link
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export default function NAV() {

  const storedArray = localStorage.getItem('user');
  const detail = JSON.parse(storedArray);
 
 const auth=localStorage.getItem('user');

 let navigate=useNavigate()
  const logoutwebsite=async()=>{
    localStorage.clear();
    navigate("/login");
    console.log("hello");
  }
  return (
   <>
    <div>
        <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            
  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="Company logo"><img className="imagee2" src={Image1} alt=""/></li>
            <li className="nav-item active"> <Link   className="nav-link" style={{backgroundColor:"#2a2a2a",color:'white'}}  to="/home">Home <span className="sr-only">(current)</span></Link></li>
              
                <li className="nav-item"><Link   className="nav-link" style={{color:'white'}}  to="/about"> About</Link>     </li>
                
                <li className="nav-item"><Link className="nav-link" style={{color:'white'}}  to="/dashboard">Dashboard</Link></li>
                <li className="nav-item"> <Link className="nav-link" style={{color:'white'}}  to="/purchases">Purchases</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{color:'white'}}  to="/productdistributor">Products</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{color:'white'}}  to="/contact">Contact Us</Link></li>
                <li className="nav-item">  <Link className="nav-link" style={{color:'white'}}  to="/profile"> Profile</Link>     </li>
               <div className="nav-item-logout" ><li className="nav-item">{ auth? <Link className="nav-link" style={{color:'white'}} onClick={logoutwebsite}  to="/"> Logout</Link>  :<Link className="nav-link" style={{color:'white'}}  to="/"> Login</Link>   }  </li></div>
              </ul>
              
            </div>
          </nav>
        </div>
      </div>
    </div>
    </>
  )
}
