import { type Response, type Request } from 'express';
import { getAllVideosFromDB, getVideoByIdFromDB } from '../services/video_service';

export async function getVideos (req: Request, res: Response) {
  const data = await getAllVideosFromDB();
  return res.status(200).send({
    message: 'Ok',
    data
  });
}

export async function getVideo (req: Request, res: Response) {
  const { video_id: videoId } = req.params;
  const video = await getVideoByIdFromDB(videoId);
  return res.status(200).send({
    message: 'Ok',
    data: video
  });
}
