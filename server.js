import express from 'express';
import connect from './connectdb.js';
import { authRoutes } from './routes/authRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { urlRoutes } from './routes/urlRoutes.js';

// web server
const app = express();
app.use(express.json());

app.use(cors());

// dotenv environment setup
dotenv.config();

// To connected with routes
app.use('/api/users', authRoutes);
app.use('/api', urlRoutes);

let port = process.env.PORT || 4002;

app.listen(port, async () => {
  console.log(`The App is running on the port ${port}`);
  // connect to the database
  await connect();
});
