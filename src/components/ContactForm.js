import React, { useState } from 'react';
import axios from 'axios';
import './styles/contactform.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    NIMI: '',
    PUHELINNUMERO: '',
    PÄIVÄMÄÄRÄ: '',
    SÄHKÖPOSTI: '',
    VIESTI: ''
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
      // Reset the form or show a success message
      setFormData({
        NIMI: '',
        PUHELINNUMERO: '',
        PÄIVÄMÄÄRÄ: '',
        SÄHKÖPOSTI: '',
        VIESTI: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error and show an error message
    }
  };

  return (
    <div>
      <h2>VARAA AIKA TAPAAMISELLE</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            {key === 'viesti' ? (
              <textarea id={key} name={key} value={formData[key]} onChange={handleInputChange}></textarea>
            ) : (
              <input type={key === 'sahkoposti' ? 'email' : 'text'} id={key} name={key} value={formData[key]} onChange={handleInputChange} required={key === 'sahkoposti'} />
            )}
          </div>
        ))}
        <div className="form-group">
          <button type="submit" className="submit-button">Lähetä</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;