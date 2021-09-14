import { Router } from 'express';
// import { verifyToken } from '../middlewares';
import { checkEmailAvailability, signIn } from '../controllers/accounts.js';

const router = Router();

router.post('/signIn', signIn);
router.post('/checkEmailAvailability', checkEmailAvailability);

export default router;
