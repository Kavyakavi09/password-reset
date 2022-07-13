import express from 'express';
import { createUrl, getUrl, redirectUrl } from '../controller/urlShort.js';
const router = express.Router();

router.get('/shortUrl', getUrl);

router.post('/createUrl', createUrl);

router.get('/:shortUrl', redirectUrl);

export const urlRoutes = router;
