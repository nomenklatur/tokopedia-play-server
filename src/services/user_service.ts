import userModel from '../models/user_model';
import { v4 as uuidV4 } from 'uuid';
import { type User, type RegisterUserPayload, type AuthUserPayload } from '../interfaces/user_types';
import { hashing, validatePassword } from '../utilities/hashing';
import { signToken } from '../utilities/tokenizing';

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
    return {
      code: 401,
      message: 'Email or Password is incorrect'
    };
  }

  const isUserValidated = validatePassword(user.password, password);

  if (!isUserValidated) {
    return {
      code: 401,
      message: 'Email or Password is incorrect'
    };
  }

  const accessToken = signToken(user);

  return {
    code: 200,
    message: 'Success',
    data: accessToken
  };
}
