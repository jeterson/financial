import { SaveTransactionController } from '@modules/transactions/useCases/controllers/SaveTransactionController';
import {Router} from 'express';
import { container } from 'tsyringe';


const transactionRoutes = Router();

const saveTransactionController = container.resolve(SaveTransactionController)

transactionRoutes.post('/', saveTransactionController.handle)

export {transactionRoutes}