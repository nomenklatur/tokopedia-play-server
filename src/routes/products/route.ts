import { Router } from 'express';
import { getProducts, updateProduct } from '../../controllers/product_controller';
import authenticate from '../../middleware/authenticate';

const ProductRoutes: Router = Router();

ProductRoutes.get('/', getProducts);
ProductRoutes.put('/:id', authenticate, updateProduct);

export default ProductRoutes;
