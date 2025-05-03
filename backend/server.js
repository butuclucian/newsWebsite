const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint pentru abonare la newsletter
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Configurare transport nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,     // e.g. youremail@gmail.com
      pass: process.env.EMAIL_PASS,     // parola de aplicație generată de Google
    },
  });

  const mailOptions = {
    from: `"News Website" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Thanks for subscribing!',
    text: 'Thank you for subscribing to our newsletter. Stay tuned for more updates!',
    html: `
      <h2>Welcome to News Website!</h2>
      <p>Thank you for subscribing to our newsletter. Stay tuned for weekly updates!</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Subscription successful. Email sent.' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const express = require('express');
const { getTopPages } = require('./analytics');

app.get('/api/analytics/top-pages', async (req, res) => {
  try {
    const data = await getTopPages();
    res.json(data);
  } catch (err) {
    console.error('Analytics error:', err.message);
    res.status(500).json({ error: 'Eroare Analytics' });
  }
});
