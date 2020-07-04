import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';
import SessionController from '../controllers/SessionController';

const upload = multer(uploadConfig.multer);

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const sessionController = new SessionController();

usersRouter.get('/', usersController.index);
usersRouter.post('/', usersController.create);
usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update);
usersRouter.post('/login', sessionController.create);

export default usersRouter;
