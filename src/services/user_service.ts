import userModel from '../models/user_model';
import { v4 as uuidV4 } from 'uuid';
import { type RegisterUserPayload } from '../interfaces/payloads';
import { hashing } from '../utilities/hashing';

export async function createUser (payload: RegisterUserPayload) {
  const userId = uuidV4();
  const hashedPassword = hashing(payload.password);

  return await userModel.create({
    user_id: userId,
    ...payload,
    password: hashedPassword
  });
}
