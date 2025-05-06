import express from 'express'
import { addArticle, listArticle, removeArticle, singleArticle } from '../controllers/articleController.js'
import upload from '../midddleware/multer.js'
import adminAuth from '../midddleware/adminAuth.js';

const articleRouter = express.Router();

articleRouter.post('/add', adminAuth, upload.fields([{ name: 'image', maxCount: 1 }]), addArticle);
articleRouter.post('/remove', adminAuth, removeArticle)
articleRouter.post('/single', singleArticle)
articleRouter.get('/list', listArticle)

export default articleRouter;