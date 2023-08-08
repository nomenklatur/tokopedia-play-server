import commentModel from '../models/comment_model';
import { logger } from '../utilities/logger';

export async function getAllCommentsFromDB () {
  return await commentModel.find().then((data) => {
    return data;
  }).catch((err) => {
    logger.error(err);
  });
}
