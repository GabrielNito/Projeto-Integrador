import { Router } from 'express';
import threadsRouter from './threads.route';
import notificationsRouter from './notifications.route';
const router = Router();

router.use('/threads', threadsRouter);

router.use('/notifications', notificationsRouter);
export default router;
