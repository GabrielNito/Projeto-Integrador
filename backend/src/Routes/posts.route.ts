import { Router } from 'express';
import { PostsController } from '../Controllers/Posts.controller';
import { auth } from '../middlewares/auth.middleware';

const router = Router();

const Posts = new PostsController();

router.get('/', Posts.getAllPosts);

router.get('/:id', Posts.getPostById);

router.post('/', auth, Posts.createPost);

export default router;
