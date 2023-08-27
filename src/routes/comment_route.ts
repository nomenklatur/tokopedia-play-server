import { Router } from 'express';
import { createComment, getComments, deleteComment } from '../controllers/comment_controller';

const CommentRoutes: Router = Router();

CommentRoutes.get('/', getComments);
CommentRoutes.post('/', createComment);
CommentRoutes.delete('/:id', deleteComment);

export default CommentRoutes;
