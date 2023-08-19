import { Router } from 'express';
import { getProducts, updateProduct } from '../../controllers/product_controller';

const ProductRoutes: Router = Router();

ProductRoutes.get('/', getProducts);
ProductRoutes.put('/:id', updateProduct);

export default ProductRoutes;
