import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import RetailersController from '../controllers/RetailersController';
import RetailerAvatarController from '../controllers/RetailerAvatarController';
import SessionController from '../controllers/SessionController';

const upload = multer(uploadConfig.multer);

const retailersRouter = Router();
const retailersController = new RetailersController();
const retailerAvatarController = new RetailerAvatarController();
const sessionController = new SessionController();

retailersRouter.post('/', retailersController.create);
retailersRouter.patch('/image', ensureAuthenticated, upload.single('image'), retailerAvatarController.update);
retailersRouter.post('/login', sessionController.create);

export default retailersRouter;
