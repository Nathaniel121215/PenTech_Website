const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { to, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nathanielpenaranda41@gmail.com',
      pass: 'neafufgopcjqcezc'
    }
  });
  const fromEmail = `"${to}" <${to}>`;

  const mailOptions = {
    from: `${to} <${to}>`,
    to:'nathaniel121215@gmail.com',
    subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});