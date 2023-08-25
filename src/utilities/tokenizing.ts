import * as env from 'dotenv';
import jwt from 'jsonwebtoken';

env.config();

export function signToken (payload: object) {
  return jwt.sign({ ...payload }, process.env.JWT_SECRET as string);
}
