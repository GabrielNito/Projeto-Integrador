import { Router } from 'express';
import { LoginController } from '../Controllers/Login.controller';

const router = Router();
const login = new LoginController();

router.post('/authenticate', login.authenticate);

router.post('/authenticateByToken', login.authenticateByToken);


export default router;
