import { type Request, type Response } from 'express';
import { createValidation } from '../validations/comment_validation';
import { logger } from '../utilities/logger';
import { getAllCommentsFromDB, insertCommentToDB } from '../services/comment_service';

export async function createComment (req: Request, res: Response) {
  const { error, value } = createValidation(req.body);

  if (error) {
    logger.error('Comment Validation Error:');
    return res.status(422).send({
      message: error.details[0].message
    });
  }

  try {
    await insertCommentToDB(value);
    return res.status(200).send({
      message: 'New comment created!'
    });
  } catch (error) {
    return res.status(500).send({
      message: error
    });
  }
}

export async function getComments (req: Request, res: Response) {
  const data = await getAllCommentsFromDB();
  return res.status(200).send({
    message: 'Ok',
    data
  });
}
