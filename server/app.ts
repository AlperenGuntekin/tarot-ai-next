import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'https://www.ai-tarot.online'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
