import videoModel from '../models/video_model';
import { logger } from '../utilities/logger';

export async function getAllVideosFromDB () {
  return await videoModel.find().then((data) => {
    return data;
  }).catch((err) => {
    logger.error(err);
  });
}
