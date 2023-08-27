import { logger } from '../utilities/logger';
import productModel from '../models/product_model';
import { type ProductPayload } from '../interfaces/product_types';

export async function getAllProductsFromDB () {
  return await productModel.find().then((data) => {
    return data;
  }).catch((err) => {
    logger.error(err);
  });
}

export async function updateProductFromDB (productId: string, payload: ProductPayload) {
  return await productModel.findOneAndUpdate({
    product_id: productId
  }, payload);
}
