import { type Application } from 'express';
import { type Routes } from '../interfaces/common';
import VideoRoutes from './video_route';
import ProductRoutes from './product_route';
import CommentRoutes from './comment_route';
import UserRoutes from './user_route';

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
