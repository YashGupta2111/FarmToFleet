import React from 'react'
import './about.css'
import Image11 from './images/warehouse.png'
// import Footer from './footer'
import Test1 from './images/YashGupta.jpg'
import Test2 from './images/pranay.jpg'
import Test3 from './images/vinay.png'
export default function about() {
  return (
    <>
    <div className="about-container">
      <div className="about-us">
   <h1 style={{ fontWeight: 'bold' }}>Our Mission</h1>
   <h4>At FarmToFleet, our mission is to transform warehouse management by providing advanced, intuitive solutions that simplify the tasks of warehouse managers and distributors. We focus on streamlining operations, reducing manual errors, and enhancing productivity. Our goal is to ensure seamless and efficient management from farm to fleet, empowering businesses to operate with greater accuracy, scalability, and ease. Together, we drive progress and innovation in warehouse management.</h4>
   </div>
   
   <div >
    <img className="imagee" src={Image11} alt=""/></div>   
    </div>
    <h1 className="Teamdetails" style={{ fontWeight: 'bold',fontSize:'px' }}>Our Team</h1>
    <div className="TEAM">
    <div className="CARD" style={{ width: "18rem" }}> <div className="card-body">
  <img className="card-img-top" style={{padding:'20px'}}src={Test2} alt="" />
 
    <h5 className="card-title" style={{ fontWeight: 'bold' }}>Pranay Agarwal</h5>
    <p className="card-text" style={{ fontWeight: 'bold' }}>Team Leader<br/>Backend Engineer</p>
    
  </div>
  
</div >
<div className="CARD" style={{ width: "18rem" }}> <div className="card-body">
  <img className="card-img-top" style={{padding:'20px'}}src={Test1} alt="" />
 
    <h5 className="card-title" style={{ fontWeight: 'bold' }}>Yash Gupta</h5>
    <p className="card-text" style={{ fontWeight: 'bold' }}>Member<br/>MERN stack Developer</p>
    
  </div>
  
</div>
<div className="CARD" style={{ width: "18rem" }}><div className="card-body">
  <img className="card-img-top" style={{padding:'20px'}} src={Test3} alt="" />
  
    <h5 className="card-title" style={{ fontWeight: 'bold' }}>V Venkata Vinay Kumar</h5>
    <p className="card-text" style={{ fontWeight: 'bold' }}>Member<br/>Frontend Developer</p>
    
  </div>
  
</div>
</div>

    </>
  )
}
