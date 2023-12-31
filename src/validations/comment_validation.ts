import Joi from 'joi';
import { type CommentPayload } from '../interfaces/comment_types';

export const createValidation = (payload: CommentPayload) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    comment: Joi.string().min(1).required()
  });

  return schema.validate(payload);
};
