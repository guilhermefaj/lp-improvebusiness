import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './src/api/send.ts';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
}); 