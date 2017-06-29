import React from 'react';
import './ContactUs.css';
import '../../assets/css/scss/import.css';
import ContactForm from './ContactForm';


const contactEmail = () => (
  <div className="row padding-top-3">
    <div className="col-md-12">
      <p className="text-center text-muted padding-top-3">Or just email us:</p>
      <div className="text-center">
        <a href="" className="lead text-muted">
          <span>
            <span className="transform">hello@productstudio.valic.com</span>
          </span>
        </a>
      </div>
    </div>
  </div>
)

const ContactUs = () => (
  <div id="Contact" className="block paralax clearfix transform">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="h1 text-center padding-bottom-3 margin-top-0">Contact Us</h2>
          <p className="lead text-center margin-bottom-0">We are driven by creating experiences that deliver results.</p>
          <div className="choke padding-bottom-0">
            <div className="row">
              <ContactForm />
            </div>
            {contactEmail()}
          </div>
        </div>
      </div>
    </div>
  </div>
)



export default ContactUs;
