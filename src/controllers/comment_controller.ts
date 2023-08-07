import { type Request, type Response } from 'express';
import { createValidation } from '../validations/comment_validation';
import { logger } from '../utilities/logger';

export function createComment (req: Request, res: Response) {
  const { error } = createValidation(req.body);

  if (error) {
    logger.error('Comment Validation Error:');
    return res.status(422).send({
      message: error.details[0].message
    });
  }

  logger.info('New comment created');
  return res.status(200).send({
    message: 'New comment created!',
    data: req.body
  });
}

export function getComments (req: Request, res: Response) {
  return res.status(200).send({
    message: 'Ok'
  });
}
