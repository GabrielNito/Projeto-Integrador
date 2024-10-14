import { Router } from 'express';
import threadsRouter from './threads.route';
<<<<<<< HEAD
import visitsRouter from './visits.route';
=======
<<<<<<< HEAD
import notificationsRouter from './notifications.route';
=======
<<<<<<< HEAD
import usersRouter from './users.route';
=======
import postsRouter from './posts.route';
>>>>>>> ffa77fe8b78e6005d8ce8c420f411962c2ed3f52

>>>>>>> 9c0efe359207b1107eed05d7fa60e5f862feae7d
>>>>>>> f1da1dd20a1446f9a4ce15682d40f543f2474cfc
const router = Router();

router.use('/threads', threadsRouter);
router.use('/posts', postsRouter);

<<<<<<< HEAD
router.use('/visits', visitsRouter);

=======
router.use('/users', usersRouter);

router.use('/notifications', notificationsRouter);
>>>>>>> f1da1dd20a1446f9a4ce15682d40f543f2474cfc
export default router;
