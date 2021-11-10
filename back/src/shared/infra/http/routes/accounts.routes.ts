import {Router} from 'express'
import {SaveAccountController} from '@modules/accounts/useCases/SaveAccountController';

const accountRoutes = Router();
const saveAccountController = new SaveAccountController();

accountRoutes.post('/', saveAccountController.handle);

export {accountRoutes}