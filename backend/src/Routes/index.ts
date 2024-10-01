import { Router } from 'express';
import threadsRouter from './threads.route';

const router = Router();

router.use('/threads', threadsRouter);

export default router;
