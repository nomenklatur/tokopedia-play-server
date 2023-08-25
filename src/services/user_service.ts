import userModel from '../models/user_model';
import { v4 as uuidV4 } from 'uuid';
import { type User, type RegisterUserPayload, type AuthUserPayload } from '../interfaces/user_type';
import { hashing, validatePassword } from '../utilities/hashing';
import { signToken } from '../utilities/tokenizing';
import { logger } from '../utilities/logger';

export async function createUser (payload: RegisterUserPayload) {
  const userId = uuidV4();
  const hashedPassword = hashing(payload.password);

  return await userModel.create({
    user_id: userId,
    ...payload,
    password: hashedPassword
  });
}

export async function validateUser (payload: AuthUserPayload) {
  const { email, password } = payload;
  const user: User = await userModel.findOne({ email }) as User;

  if (!user) {
    logger.error('email is incorrect');
    return {
      code: 401,
      message: 'Email is incorrect'
    };
  }

  const isUserValidated = validatePassword(user.password, password);

  if (!isUserValidated) {
    logger.error('password is incorrect');
    return {
      code: 401,
      message: 'Password is incorrect'
    };
  }

  const accessToken = signToken(user);

  return {
    code: 200,
    message: 'Success',
    data: accessToken
  };
}
