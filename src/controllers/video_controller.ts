import { type Response, type Request } from 'express';
import { getAllVideosFromDB } from '../services/video_service';

export async function getVideos (req: Request, res: Response) {
  const data = await getAllVideosFromDB();
  return res.status(200).send({
    message: 'Ok',
    data
  });
}
