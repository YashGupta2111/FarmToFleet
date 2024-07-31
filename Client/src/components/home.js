import React,{useEffect,useState } from 'react'
// import Image1  from './images/image221.png'
// import Image2 from './images/images2.jpg'
// import Image3  from './images/images3.jpeg'
import Contact from './contact.js'
import Footer from './footer.js';
import About from './about.js'
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
 const navigate=useNavigate();
  const slides = [
    " ",
    'ARCHITECT   BUILDER ARCHITECT   BUILDER',
    'ARCHITECT   BUILDER ARCHITECT   BUILDER ',
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    }; }, []); 
 const navigated=()=>{
   navigate("/contact");
 }
  return (<>
    <div className="home-container"> <br/>
    <br/>
    <br/>
    <br/>
    <div className="auto-slider-container">
      <div className="auto-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        
          <div className="auto-slide">
           <h1 className="auttt"><b>Optimized Inventory Control</b></h1>
           <h6>Efficiently manage stock levels for streamlined <br/>operations and cost savings</h6>
           <button className="homebutton" onClick={navigated}>Contact Us</button>
          </div>
          <div className="auto-slide">
           <h1 className="auttt"><b>Precision in Operations</b></h1>
           <h6>Execute tasks with accuracy and attention to detail <br/>for excellence</h6>
           <button className="homebutton">Contact Us</button>
          </div>
        
          <div className="auto-slide">
           <h1 className="auttt"><b>Safe and Secure Storage</b></h1>
           <h6>Ensuring a protected and trustworthy environment <br/>for valuable inventory.</h6>
           <button className="homebutton">Contact Us</button>
          </div>
          
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
      <div className="pagee">
     <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container34 ">
        <div class="heading_container">
          <h2 style={{ fontWeight: 'bold' }}>
            Services
          </h2>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div class="box ">
              
              <div class="detail-box">
                <h5>
                Inventory Management
                </h5>
                <p>
                Keeping track of inventory levels, managing stock, and ensuring that goods are available when needed.
                </p>
                
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="box ">
              
              <div class="detail-box">
                <h5>
                Customer Interface
                </h5>
                <p>
                Providing a user-friendly interface for customers to place orders, view order history, and manage their accounts.
                </p>
                
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="box ">
             
              <div class="detail-box">
                <h5>
                Cost Analysis and Reporting
                </h5>
                <p>
                Generating detailed reports on various cost aspects such as transportation, fuel, labor, and maintenance. 
                </p>
                
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="box ">
              
              <div class="detail-box">
                <h5>
                Fleet Management
                </h5>
                <p>
                Managing and optimizing a fleet of vehicles used for transporting goods. This might include tracking vehicles, scheduling routes, and maintenance management.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div> 
  </section>
  <About/>
  <h1 className="title">Why Choose Us</h1>
  <div className="benefits-container">
      
      <section className="benefits-section">
        <h2 className="section-title">Our Benefits</h2>
        <p className="paragraph">
          At FarmToFleet, we are committed to delivering exceptional value to our customers through a comprehensive range of benefits. Our high-quality products are meticulously crafted to meet the highest standards, ensuring reliability and longevity. 
        </p>
      </section>
      <section className="services-section">
        <h2 className="section-title">What We Provide</h2>
        <p className="paragraph">
          We provide a wide range of products and services designed to meet your unique needs. From comprehensive product ranges and expert consultations to custom solutions and after-sales support, we ensure that you receive the best possible service. Our flexible payment options make it easy for you to get the products you need, when you need them.
        </p>
      </section>
      <section className="motive-section">
        <h2 className="section-title">Our Motive</h2>
        <p className="paragraph">
          Our motive is to enhance your life through innovative solutions and unparalleled service. We strive to exceed your expectations by continuously improving our offerings and ensuring that we deliver value in everything we do. Your satisfaction is our ultimate goal, and we are dedicated to building long-term relationships based on trust and excellence.
        </p>
      </section>
    </div>
<Contact/>


</div>
</div>
<Footer/>
</>
  )
}
