import React, { useState } from 'react';
import axios from 'axios';


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
      const response = await fetch(
        process.env.REACT_APP_API_URL + 'send-email',
        {
          method: 'POST',
          // No need to set headers manually when using FormData
          body: formData,
        }
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
      <form onSubmit={handleSubmit}>
        <label>
          Nimi: <input type="text" name="nimi" value={formData.nimi} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Puhelinnumero: <input type="tel" name="puhelinnumero" value={formData.puhelinnumero} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Päivämäärä: <input type="date" name="paivamaara" value={formData.paivamaara} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Sähköposti: <input type="email" name="sahkoposti" value={formData.sahkoposti} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Viesti: <textarea name="viesti" value={formData.viesti} onChange={handleInputChange}></textarea>
        </label>
        <br />
        <button type="submit">Lähetä</button>
      </form>
    </div>
  );
}

export default ContactForm;
