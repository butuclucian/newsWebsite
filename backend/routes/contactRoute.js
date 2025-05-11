// routes/contact.js
import { Router } from 'express';
const router = Router();

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log('Contact message received:', { name, email, message });

  res.status(200).json({ success: 'Message received successfully.' });
});

export default contactRouter;
