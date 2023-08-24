import { type Response, type Request } from 'express';
import { createUser } from '../services/user_service';
import { registerUserValidation } from '../validations/user_validation';
import { logger } from '../utilities/logger';

export async function register (req: Request, res: Response) {
  const { body: payload } = req;
  const { error, value } = registerUserValidation(payload);

  if (error) {
    logger.error('Validation Error:');
    return res.status(422).send({
      message: error.details[0].message
    });
  }

  try {
    await createUser(value);
    return res.status(200).send({
      message: 'Registration success'
    });
  } catch (error) {
    return res.status(500).send({
      message: error
    });
  }
}
