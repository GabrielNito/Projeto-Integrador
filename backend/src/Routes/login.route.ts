import { Router } from 'express';
import { LoginController } from '../Controllers/Login.controller';

const router = Router();
const login = new LoginController();

router.post('/authenticate', login.authenticate);

export default router;
