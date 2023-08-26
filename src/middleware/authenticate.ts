import { type Request, type Response, type NextFunction } from 'express';
import { verifyToken } from '../utilities/tokenizing';

async function authenticate (req: Request, res: Response, next: NextFunction) {
  const accessToken = req.headers.authorization?.replace(/^Bearer\s+/i, '');
  if (!accessToken) {
    return res.status(401).send({
      message: 'You don\'t have access'
    });
  }

  const { context } = verifyToken(accessToken);

  if (!context) {
    return res.status(401).send({
      message: 'Invalid Token'
    });
  }

  res.locals.userContext = context;
  return next();
}

export default authenticate;
