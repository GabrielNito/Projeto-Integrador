import { Router } from 'express';
import threadsRouter from './threads.route';
import postsRouter from './posts.route';

const router = Router();

router.use('/threads', threadsRouter);
router.use('/posts', postsRouter);

export default router;
