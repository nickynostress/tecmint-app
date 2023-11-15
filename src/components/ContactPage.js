import React from 'react';
import ContactForm from './ContactForm';
import './styles/contactpage.css';

function ContactPage() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p className='submitdesc'>
        This is the contact page. 
        Here, you can submit your personal information and schedule an appointment. 
        Hope to see you soon!
      </p>
      <ContactForm />
    </div>
  );
}

export default ContactPage;