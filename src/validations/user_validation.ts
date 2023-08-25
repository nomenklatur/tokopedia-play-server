import Joi from 'joi';
import { type RegisterUserPayload, type AuthUserPayload } from '../interfaces/user_type';

export const registerUserValidation = (payload: RegisterUserPayload) => {
  const schema = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  });

  return schema.validate(payload);
};

export const authUserValidation = (payload: AuthUserPayload) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

  return schema.validate(payload);
};
