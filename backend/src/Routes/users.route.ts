import { Router } from 'express';
import { UsersController } from '../Controllers/Users.controller';

const router = Router();

const Users = new UsersController();

router.get('/', Users.getAllPosts);

router.get('/:id', Users.getUserById);

export default router;
