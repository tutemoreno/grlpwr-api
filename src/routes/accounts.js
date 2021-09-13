import { Router } from 'express';
// import { verifyToken } from '../middlewares';
import { signIn } from '../controllers/accounts.js';

const router = Router();

router.post('/signIn', signIn);

export default router;
