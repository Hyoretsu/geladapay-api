import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import retailersRouter from '@modules/retailers/infra/http/routes/retailers.routes';

const routes = Router();

routes.use('/retailers', retailersRouter);
routes.use('/users', usersRouter);

export default routes;
