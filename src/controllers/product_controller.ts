import { type Response, type Request } from 'express';
import { getAllProductsFromDB } from '../services/product_service';

export async function getProducts (req: Request, res: Response) {
  const data = await getAllProductsFromDB();
  return res.status(200).send({
    message: 'Ok',
    data
  });
}
