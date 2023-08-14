const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the cors module

const app = express();
const port = 5000;

app.use(cors()); // Use CORS middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    console.log("sasdasdasd")
  try {
    const { nimi, puhelinnumero, paivamaara, sahkoposti, viesti } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your_email@gmail.com', // Replace with your email
        pass: 'your_password' // Replace with your password
      }
    });

    // Setup email data
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: 'destination_email@example.com', // Replace with the destination email
      subject: 'Contact Form Submission',
      text: `
        Nimi: ${nimi}
        Puhelinnumero: ${puhelinnumero}
        Päivämäärä: ${paivamaara}
        Sähköposti: ${sahkoposti}
        Viesti: ${viesti}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('An error occurred while sending the email');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
