import {container} from 'tsyringe'
import {AccountRepository} from '@modules/accounts/infra/sqlite/repositories/AccountRepository';
import { IAccountRepository } from '@modules/accounts/repositories/IAccountRepository';

container.registerSingleton<IAccountRepository>('AccountRepository', AccountRepository);

