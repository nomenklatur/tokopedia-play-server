import { logger } from '../utilities/logger';
import productModel from '../models/product_model';

export async function getAllProductsFromDB () {
  return await productModel.find().then((data) => {
    return data;
  }).catch((err) => {
    logger.error(err);
  });
}

export async function updateProductFromDB (productId: string, payload: any) {
  return await productModel.findOneAndUpdate({
    product_id: productId
  }, payload);
}
