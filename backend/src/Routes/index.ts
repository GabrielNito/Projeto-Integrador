import { Router } from 'express';
import threadsRouter from './threads.route';
import visitsRouter from './visits.route';
const router = Router();

router.use('/threads', threadsRouter);

router.use('/visits', visitsRouter);

export default router;
