import { Router } from 'express';
import { PostsController } from '../Controllers/Posts.controller';

const router = Router();

const posts = new PostsController();

router.get('/', posts.getAllPosts);

export default router;
