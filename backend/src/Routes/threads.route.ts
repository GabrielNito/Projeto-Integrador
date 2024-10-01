import { Router } from 'express';
import { ThreadsController } from '../Controllers/Threads.controller';

const router = Router();

const threads = new ThreadsController();

router.get('/', threads.getAllThreads);

router.get('/:id', threads.getThreadById);

export default router;
