import { Router } from 'express';
import { register, createSession } from '../controllers/user_controller';

const UserRoutes: Router = Router();

UserRoutes.post('/register', register);
UserRoutes.post('/login', createSession);

export default UserRoutes;
