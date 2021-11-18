import {container} from 'tsyringe'
import {AccountRepository} from '@modules/accounts/infra/sqlite/repositories/AccountRepository';
import { IAccountRepository } from '@modules/accounts/repositories/IAccountRepository';
import { ICreditCardRepository } from '@modules/creditCard/repositories/ICreditCardRepository';
import { CreditCardRepository } from '@modules/creditCard/infra/sqlite/repositories/CreditCardRepository';
import { ISaveTransactionUseCase } from '@modules/transactions/useCases/interfaces';
import { SaveTransactionUseCase } from '@modules/transactions/useCases/services/SaveTransactionUseCase';
import {TransactionRepository} from '@modules/transactions/infra/repositories/TransactionRepository'
import {ITransactionRepository} from '@modules/transactions/repositories/ITransactionRepository'

//repositories
container.registerSingleton<IAccountRepository>('AccountRepository', AccountRepository);
container.registerSingleton<ICreditCardRepository>('CreditCardRepository', CreditCardRepository)
container.registerSingleton<ITransactionRepository>('TransactionRepository', TransactionRepository)

//container.registerSingleton<ISaveTransactionUseCase>('SaveTransactionUseCase', SaveTransactionUseCase)

