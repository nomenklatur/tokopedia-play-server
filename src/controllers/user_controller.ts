import { type Response, type Request } from 'express';
import { createUser, validateUser } from '../services/user_service';
import { registerUserValidation, authUserValidation, refreshSessionValidation } from '../validations/user_validation';
import { logger } from '../utilities/logger';
import type ServiceResponse from '../interfaces/common';
import { regenerateToken } from '../utilities/tokenizing';

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

export async function createSession (req: Request, res: Response) {
  const { body: payload } = req;
  const { error, value } = authUserValidation(payload);

  if (error) {
    logger.error('Validation Error:');
    return res.status(422).send({
      message: error.details[0].message
    });
  }

  try {
    const result: ServiceResponse = await validateUser(value);
    return res.status(result.code).send({
      message: result.message,
      data: result.data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error
    });
  }
}

export async function refreshSession (req: Request, res: Response) {
  const { body: payload } = req;
  const { error, value } = refreshSessionValidation(payload);

  if (error) {
    logger.error('Validation Error:');
    return res.status(422).send({
      message: error.details[0].message
    });
  }

  try {
    const tokens = await regenerateToken(value.refresh_token);
    res.status(200).send({
      data: tokens
    });
  } catch (error) {
    res.status(500).send({
      message: error
    });
  }
}
