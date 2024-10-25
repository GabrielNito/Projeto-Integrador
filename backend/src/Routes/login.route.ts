import { Router } from 'express';
import { LoginController } from '../Controllers/Login.controller';
import { auth } from '../middlewares/auth.middleware';

const router = Router();
const login = new LoginController();

router.post('/authenticate', login.authenticate);

export default router;
