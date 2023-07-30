import { Router, type Request, type Response, type NextFunction } from 'express';

const ProductRoutes: Router = Router();

ProductRoutes.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200);
  res.send({ data: 'this is a product response' });
});

export default ProductRoutes;
