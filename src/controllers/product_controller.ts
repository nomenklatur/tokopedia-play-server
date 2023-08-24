import { type Response, type Request } from 'express';
import { getAllProductsFromDB, updateProductFromDB } from '../services/product_service';
import { updateValidation } from '../validations/product_validation';
import { logger } from '../utilities/logger';

export async function getProducts (req: Request, res: Response) {
  const data = await getAllProductsFromDB();
  return res.status(200).send({
    message: 'Ok',
    data
  });
}

export async function updateProduct (req: Request, res: Response) {
  const { body } = req;
  const { id } = req.params;

  const { error, value } = updateValidation(body);

  if (error) {
    logger.error('Product Validation Error:');
    return res.status(422).send({
      message: error.details[0].message
    });
  }

  const result = await updateProductFromDB(id, value);

  if (!result) {
    return res.status(404).send({
      message: 'Product not found'
    });
  }

  return res.status(200).send({
    message: 'Success'
  });
}
