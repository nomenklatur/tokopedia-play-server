import * as env from 'dotenv';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import userModel from '../models/user_model';

env.config();

export function signToken (payload: object) {
  const accessToken = jwt.sign({ ...payload }, process.env.JWT_SECRET as string, { expiresIn: '30m' });
  const refreshToken = jwt.sign({ ...payload }, process.env.JWT_SECRET as string, { expiresIn: '7d' });

  return {
    accessToken,
    refreshToken
  };
}

export function verifyToken (accessToken: string) {
  try {
    const userContext = jwt.verify(accessToken, process.env.JWT_SECRET as string);

    return {
      context: userContext
    };
  } catch (error) {
    console.error('Token verification error', error);
    return {
      context: null
    };
  }
}

export async function regenerateToken (refreshToken: string) {
  const { context }: JwtPayload = verifyToken(refreshToken);
  const user = await userModel.findOne({ email: context._doc.email });
  if (!user) {
    return false;
  }

  const tokens = signToken(user);
  return tokens;
}
