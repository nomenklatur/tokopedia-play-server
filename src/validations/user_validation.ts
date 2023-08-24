import Joi from 'joi';
import { type RegisterUserPayload } from '../interfaces/payloads';

export const registerUserValidation = (payload: RegisterUserPayload) => {
  const schema = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  });

  return schema.validate(payload);
};
