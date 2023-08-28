import { Router } from 'express';
import { register, createSession, refreshSession } from '../controllers/user_controller';

const UserRoutes: Router = Router();

UserRoutes.post('/register', register);
UserRoutes.post('/login', createSession);
UserRoutes.post('/refresh', refreshSession);

export default UserRoutes;
