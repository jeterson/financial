import { FindOneCardController } from '@modules/creditCard/useCases/controllers/FindOneCardController';
import { ListCardsController } from '@modules/creditCard/useCases/controllers/ListCardsController';
import { RemoveCardController } from '@modules/creditCard/useCases/controllers/RemoveCardController';
import { SaveCardController } from '@modules/creditCard/useCases/controllers/SaveCardController';
import {Router} from 'express';

const creditCardRoutes = Router();

const saveCreditCardController = new SaveCardController();
const listCardsController = new ListCardsController()
const findOneCardController = new FindOneCardController();
const removeCardController = new RemoveCardController();

creditCardRoutes.post('/', saveCreditCardController.handle)
creditCardRoutes.put('/', saveCreditCardController.handle)
creditCardRoutes.get('/', listCardsController.handle)
creditCardRoutes.get('/:id', findOneCardController.handle)
creditCardRoutes.delete('/:id', removeCardController.handle)

export {creditCardRoutes}