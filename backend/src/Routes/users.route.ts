import { Router } from 'express';
import { UsersController } from '../Controllers/Users.controller';
import { dtoValidate } from '../middlewares/dtoValidate.middleware';
import { CreateUsersDTO } from '../Dtos/create/CreateUsers.dto';

const router = Router();

const Users = new UsersController();

router.get('/', Users.getAllUsers);

router.get('/:id', Users.getUserById);

router.post('/', dtoValidate(CreateUsersDTO), Users.createUser);

export default router;
