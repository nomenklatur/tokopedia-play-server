import { Router, type Request, type Response, type NextFunction } from 'express';

const VideoRoutes: Router = Router();

VideoRoutes.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200);
  res.send({ data: 'this is a video response' });
});

export default VideoRoutes;
