import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./footer.css"; // Ensure you create and import this CSS file

const Footer = () => {
  const uniqueFontStyle = {
    fontFamily: '"Bodoni Moda SC", serif',
    fontOpticalSizing: 'auto',
    fontWeight: 700, // You can change the weight as needed
    fontStyle: 'normal'
  };
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span>About the company</span>  our mission is to transform warehouse management by providing advanced, intuitive solutions that simplify the tasks of warehouse managers and distributors. We focus on streamlining operations, reducing manual errors, and enhancing productivity. Our goal is to ensure seamless and efficient management from farm to fleet, empowering businesses to operate with greater accuracy, scalability, and ease. Together, we drive progress and innovation in warehouse management.
        </p>
        
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        
        <div>
          <i className="fa fa-phone"></i>
          <p style={{color:'white'}}> +91 8601490387</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p style={{color:'white'}}><let href="#">office@company.com</let></p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2 style={uniqueFontStyle}>Farm To <span>Fleet</span></h2>
        <p className="menu" style={{color:'white'}}>
          <let href="#">Home</let> |
          <let href="#">About</let> |
          <let href="#">Services</let> |
          <let href="#">Portfolio</let> |
          <let href="#">News</let> |
          <let href="#">Contact</let>
        </p>
        <p className="name" style={{color:'white'}}>Company Name &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
