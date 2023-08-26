import * as env from 'dotenv';
import jwt from 'jsonwebtoken';

env.config();

export function signToken (payload: object) {
  return jwt.sign({ ...payload }, process.env.JWT_SECRET as string);
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
