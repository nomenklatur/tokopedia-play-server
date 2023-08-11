import commentModel from '../models/comment_model';
import { type CommentPayload } from '../interfaces/payloads';
import { v4 as uuidV4 } from 'uuid';
import { logger } from '../utilities/logger';

export async function getAllCommentsFromDB () {
  return await commentModel.find().then((data) => {
    return data;
  }).catch((err) => {
    logger.error(err);
  });
}

export async function insertCommentToDB (payload: CommentPayload) {
  const { username, comment } = payload;
  const commentId = uuidV4();
  return await commentModel.create({ comment_id: commentId, username, comment });
}
