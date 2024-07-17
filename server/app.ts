import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

import { getReading } from './controllers/readingController';

const app = express();

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.post('/api/getReading', getReading);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
