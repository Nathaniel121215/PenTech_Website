const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { Customer_Name,
  Customer_Email,
  Customer_Organization,
  Customer_Contact,
  Customer_Country,
  Customer_Topic,
  Customer_Message, } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nathanielpenaranda41@gmail.com',
      pass: 'neafufgopcjqcezc'
    }
  });
  // const fromEmail = `"${to}" <${to}>`;

  const mailOptions = {
    from: `${Customer_Name} <${Customer_Email}>`,
    to:'nathaniel121215@gmail.com',
    subject:Customer_Topic,
    text: Customer_Message + '\n\n\n' + 'Email: '  + Customer_Email + '\n' + 'Organization: '+ Customer_Organization + '\n' + 'Contact: '  + Customer_Contact + '\n' + 'Country: '  + Customer_Country,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      // res.send('Email sent successfully');
      res.send(Customer_Organization);
    }
  });
});

// app.listen(5000, () => {
//   console.log('Server started on port 5000');
// });