import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import articleRouter from './routes/articleRoute.js';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';


// Destructurarea variabilelor de mediu
const { EMAIL_USER, EMAIL_PASS } = process.env;

// app config
const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json())
app.use(cors())

app.use(bodyParser.json({ limit: '10mb' }));  // 10 MB limit
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/article', articleRouter);


// newsletter subscription
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // validare email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // config transport nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"News Website" <${EMAIL_USER}>`,
    to: email,
    subject: 'Thanks for subscribing!',
    text: 'Thank you for subscribing to our newsletter. Stay tuned for more updates!',
    html: `
      <h2>Welcome to News Website!</h2>
      <p>Thank you for subscribing to our newsletter. Stay tuned for weekly updates!</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Subscription successful. Email sent.' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});


app.get('/', (req, res) => {
  res.send("API working...");
});


app.listen(port, ()=> console.log('Server started on PORT : '+ port))