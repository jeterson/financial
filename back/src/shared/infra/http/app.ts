import "reflect-metadata";
import BullBoard from "bull-board";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import Queue from '@shared/container/providers/FilaProvider/implements/BullFilaProvider'
import createConnections from '@shared/infra/sqlite'


import rateLimiter from "./middlewares/rateLimiter";
import {router} from './routes'
import { handleError } from "./middlewares/handleError";
import '@shared/container'

createConnections();
const app = express();
BullBoard.setQueues(Queue.queues.map((queue) => queue.bull))

app.use('/admin/queues', BullBoard.UI)

app.use(rateLimiter)
app.use(express.json())
app.use(cors())
app.use(router)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => handleError(err, req, res, next))

export {app}
