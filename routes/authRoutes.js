import express from 'express';
import {
  forgetPassword,
  resetPassword,
  signin,
  signup,
} from '../controller/auth.js';
const router = express.Router();

router.post('/signup', signup);

router.post('/signin', signin);

router.post('/forget-password', forgetPassword);

router.post('/reset-password', resetPassword);

export const authRoutes = router;
