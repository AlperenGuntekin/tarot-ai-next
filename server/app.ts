import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Use the CORS middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000', // Replace with your frontend domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

const corsOptions = {
  origin: 'https://www.ai-tarot.online/', // Replace with your frontend's URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

// Example endpoint
app.post('/api/getReading', (req, res) => {
  const { questionType, selectedCards, question, birthChartInfo } = req.body;

  // Your logic to handle the reading

  res.json({
    interpretation: 'Your reading interpretation here',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
