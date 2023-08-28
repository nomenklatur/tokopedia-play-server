import Joi from 'joi';
import { type RegisterUserPayload, type AuthUserPayload, type RefreshSessionPayload } from '../interfaces/user_types';

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

export const refreshSessionValidation = (payload: RefreshSessionPayload) => {
  const schema = Joi.object({
    refresh_token: Joi.string().required()
  });

  return schema.validate(payload);
};
