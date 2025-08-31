import { Router } from 'express';
import { signup, signin, verifyOTP, googleAuth } from '../controllers/authController';
import { validateSignup, validateSignin, validateOTP } from '../middleware/validation';

const router = Router();

router.post('/signup', validateSignup, signup);
router.post('/signin', validateSignin, signin);
router.post('/verify-otp', validateOTP, verifyOTP);
router.post('/google', googleAuth);

export default router;
