import { Router, type Request, type Response, type NextFunction } from 'express';

const CommentRoute: Router = Router();

CommentRoute.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200);
  res.send({ data: 'this is a comment response' });
});

export default CommentRoute;
