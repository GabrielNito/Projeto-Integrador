import { Router } from 'express';
import threadsRouter from './threads.route';
<<<<<<< HEAD
import usersRouter from './users.route';
=======
import postsRouter from './posts.route';
>>>>>>> ffa77fe8b78e6005d8ce8c420f411962c2ed3f52

const router = Router();

router.use('/threads', threadsRouter);
router.use('/posts', postsRouter);

router.use('/users', usersRouter);

export default router;
