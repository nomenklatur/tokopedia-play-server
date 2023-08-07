import { type Response, type Request } from 'express';

export function getProducts (req: Request, res: Response) {
  return res.status(200).send({
    message: 'Ok',
    data: [
      {
        name: 'Item1',
        price: 2000
      }
    ]
  });
}
