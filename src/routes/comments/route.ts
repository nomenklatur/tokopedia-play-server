import { Router } from 'express';
import { createComment, getComments } from '../../controllers/comment_controller';

const CommentRoute: Router = Router();

CommentRoute.get('/', getComments);
CommentRoute.post('/', createComment);

export default CommentRoute;
