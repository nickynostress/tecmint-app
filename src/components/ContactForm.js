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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nimi">
            Nimi: <input type="text" id="nimi" name="nimi" value={formData.nimi} onChange={handleInputChange} required />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="puhelinnumero">
            Puhelinnumero: <input type="tel" id="puhelinnumero" name="puhelinnumero" value={formData.puhelinnumero} onChange={handleInputChange} />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="paivamaara">
            Päivämäärä:
          </label>
          
          <input
            type="date"
            id="paivamaara"
            name="paivamaara"
            value={formData.paivamaara}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="sahkoposti">
            Sähköposti: <input type="email" id="sahkoposti" name="sahkoposti" value={formData.sahkoposti} onChange={handleInputChange} required />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="viesti">
            Viesti: <textarea id="viesti" name="viesti" value={formData.viesti} onChange={handleInputChange}></textarea>
          </label>
        </div>

        <div className="form-group">
          <button type="submit">Lähetä</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;