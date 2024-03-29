import express from 'express';
import connect from './connectdb.js';
import { authRoutes } from './routes/authRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';

// web server
const app = express();
app.use(express.json());

app.use(cors());

// dotenv environment setup
dotenv.config();

app.get('/', (req, res) => {
  res.status(200).json('Welcome to My App');
});
// To connected with routes
app.use('/api/users', authRoutes);

let port = process.env.PORT || 4001;

app.listen(port, async () => {
  console.log(`The App is running on the port ${port}`);
  // connect to the database
  await connect();
});
