import { Router } from 'express';
import { createComment, getComments, deleteComment } from '../../controllers/comment_controller';

const CommentRoute: Router = Router();

CommentRoute.get('/', getComments);
CommentRoute.post('/', createComment);
CommentRoute.delete('/:id', deleteComment);

export default CommentRoute;
