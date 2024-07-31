import React from 'react';
import './contact.css'
// import Footer from './footer'
import Contact from './images/ContactImage.jpg'
const ContactSection = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom);}
  return (<>
    <section  >
    
  
      <div className="container4 mt-5">
      <h2 className="mb-3-form"style={{ fontWeight: 'bold' }} >Contact Form</h2><br/>
      <div className="contectcontainer"> 
     
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="contactbutton" type="submit">
          {formStatus}
        </button>
      </form>
     
      <div>
      <img className="card-img-top" style={{padding:'20px',position:"relative",left:'100px'}}src={Contact} alt="" />
  
      </div>
    </div>
    </div>
    </section>
  </>
  );
};

export default ContactSection;
