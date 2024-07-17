import express from 'express';
import { getReading } from '../controllers/readingController';
import cors from 'cors';

const router = express.Router();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

router.use(cors(corsOptions));

router.options('/getReading', cors(corsOptions), (req, res) => {
  res.sendStatus(200);
});

router.post('/getReading', cors(corsOptions), getReading);

export default router;
