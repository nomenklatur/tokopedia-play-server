import { Router } from 'express';
import { getProducts } from '../../controllers/product_controller';

const ProductRoutes: Router = Router();

ProductRoutes.get('/', getProducts);

export default ProductRoutes;
