// ContactForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './styles/contactform.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    nimi: '',
    puhelinnumero: '',
    paivamaara: '',
    sahkoposti: '',
    viesti: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + 'send-email',
        formData
      );
      console.log('Email response:', response.data);
      // You can reset the form or show a success message here
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error and show an error message
    }
  };

  return (
    <div>
      <h2>Varaa aika leikkuulle</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* ... (rest of your form) */}
      </form>
    </div>
  );
}

export default ContactForm;