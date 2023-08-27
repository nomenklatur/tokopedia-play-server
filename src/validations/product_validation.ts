import Joi from 'joi';
import { type ProductPayload } from '../interfaces/product_types';

export const updateValidation = (payload: ProductPayload) => {
  const schema = Joi.object({
    product_url: Joi.string().uri().optional(),
    name: Joi.string().optional(),
    price: Joi.number().integer().min(1).optional()
  });

  return schema.validate(payload);
};
