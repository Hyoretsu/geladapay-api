import { Router } from 'express';

import RetailersController from '../controllers/RetailersController';

const retailersRouter = Router();
const retailersController = new RetailersController();

retailersRouter.post('/', retailersController.create);

export default retailersRouter;
