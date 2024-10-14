import { Router } from 'express';

import threadsRouter from './threads.route';
import visitsRouter from './visits.route';
import notificationsRouter from './notifications.route';
import usersRouter from './users.route';
import postsRouter from './posts.route';

const router = Router();

router.use('/threads', threadsRouter);
router.use('/posts', postsRouter);
router.use('/visits', visitsRouter);
router.use('/users', usersRouter);
router.use('/notifications', notificationsRouter);

export default router;
