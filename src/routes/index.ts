import { type Application } from 'express';
import { type Routes } from 'src/interfaces/routes';
import VideoRoutes from './videos/route';
import ProductRoutes from './products/route';
import CommentRoutes from './comments/route';
import UserRoutes from './user/route';

const _routes: Routes[] = [
  { url: '/user', router: UserRoutes },
  { url: '/videos', router: VideoRoutes },
  { url: '/products', router: ProductRoutes },
  { url: '/comments', router: CommentRoutes }
];

const routes = (app: Application) => {
  _routes.forEach((route) => {
    const { url, router } = route;
    app.use(url, router);
  });
};

export default routes;
