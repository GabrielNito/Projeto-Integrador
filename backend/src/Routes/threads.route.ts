import { Router } from 'express';
import { ThreadsController } from '../Controllers/Threads.controller';
import { dtoValidate } from '../middlewares/dtoValidate.middleware';
import { CreateThreadsDTO } from '../Dtos/create/CreateThreadsDTO.dto';

const router = Router();

const threads = new ThreadsController();

router.get('/', threads.getAllThreads);

router.get('/:id', threads.getThreadById);

router.post('/', dtoValidate(CreateThreadsDTO), threads.createThread);

export default router;
