import { OpenAI } from 'openai';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/openai/generate-titles', async (req, res) => {
  const { description } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates catchy article titles.',
        },
        {
          role: 'user',
          content: `Generează 3 titluri scurte și atractive pentru un articol cu această descriere:\n\n${description}`,
        },
      ],
    });

    const titles = completion.choices[0].message.content
      .split('\n')
      .map((line) => line.replace(/^\d+\.\s*/, '').trim())
      .filter((line) => line);

    res.json({ titles });
  } catch (error) {
    console.error('Eroare OpenAI:', error);
    res.status(500).json({ error: 'Eroare la generarea titlurilor.' });
  }
});

app.listen(5000, () => console.log('Server is running on http://localhost:5000'));
