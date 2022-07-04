import express from 'express';
import {
  forgetPassword,
  resetPassword,
  signin,
  signup,
} from '../controller/auth.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json('Welcome to My App');
});

router.post('/signup', signup);

router.post('/signin', signin);

router.post('/forget-password', forgetPassword);

router.post('/reset-password/:token', resetPassword);

export const authRoutes = router;
