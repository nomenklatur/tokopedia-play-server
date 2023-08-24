import { Router } from 'express';
import { register } from '../../controllers/user_controller';

const UserRoutes: Router = Router();

UserRoutes.post('/register', register);

export default UserRoutes;
