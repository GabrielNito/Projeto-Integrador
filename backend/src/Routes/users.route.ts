import { Router } from 'express';
import { UsersController } from '../Controllers/Users.controller';

const router = Router();

const Users = new UsersController();

router.get('/', Users.getAllUsers);

router.get('/:id', Users.getUserById);

router.post('/', Users.createUser);

export default router;
