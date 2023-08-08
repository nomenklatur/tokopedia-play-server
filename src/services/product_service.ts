import { logger } from '../utilities/logger';
import productModel from '../models/product_model';

export async function getAllProductsFromDB () {
  return await productModel.find().then((data) => {
    return data;
  }).catch((err) => {
    logger.error(err);
  });
}
