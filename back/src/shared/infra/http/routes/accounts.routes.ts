import {Router} from 'express'
import {SaveAccountController} from '@modules/accounts/useCases/controllers/SaveAccountController';
import { ListAccountsController } from '@modules/accounts/useCases/controllers/ListAccountsController';
import { FindOneAccountController } from '@modules/accounts/useCases/controllers/FindOneAccountController';
import { RemoveAccountController } from '@modules/accounts/useCases/controllers/RemoveAccountController';

const accountRoutes = Router();
const saveAccountController = new SaveAccountController();
const listAccountsController = new ListAccountsController();
const findOneAccountController = new FindOneAccountController();
const removeAccountController = new RemoveAccountController();

accountRoutes.post('/', saveAccountController.handle);
accountRoutes.put('/', saveAccountController.handle);
accountRoutes.get('/', listAccountsController.handle);
accountRoutes.get('/:id', findOneAccountController.handle);
accountRoutes.delete('/:id', removeAccountController.handle);

export {accountRoutes}