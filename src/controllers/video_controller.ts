import { type Response, type Request } from 'express';

export function getVideos (req: Request, res: Response) {
  return res.status(200).send({
    message: 'Ok',
    data: [
      {
        video_url: 'someurl',
        title: 'some title'
      }
    ]
  });
}
