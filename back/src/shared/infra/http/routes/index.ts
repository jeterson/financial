import { Router } from "express";
import { accountRoutes } from "./accounts.routes";
import { creditCardRoutes } from "./creditCard.route";
import { transactionRoutes } from "./transaction.routes";


const router = Router();

router.use('/accounts', accountRoutes)
router.use('/credit-cards', creditCardRoutes)
router.use('/transactions', transactionRoutes)

export {router}