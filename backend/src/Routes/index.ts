import { Router } from 'express';
import threadsRouter from './threads.route';
import usersRouter from './users.route';

const router = Router();

router.use('/threads', threadsRouter);

router.use('/users', usersRouter);

export default router;
