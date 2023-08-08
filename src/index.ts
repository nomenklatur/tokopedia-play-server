import * as env from 'dotenv';
import express, { type Application, type NextFunction, type Request, type Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import { logger } from './utilities/logger';

env.config();
const app: Application = express();
const port: number = parseInt(process.env.APP_PORT as string, 10);
const db: string = process.env.MONGODB_CONNECTION as string;

// database connection
mongoose.connect(db).then(() => {
  logger.info('Connected to MongoDB');
}).catch((error) => {
  logger.error('Could not connect to MongoDB');
  logger.error(error);
  process.exit(1);
});

// parse body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors access handler
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use('/hello', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World!' });
});

routes(app);

app.listen(port, () => { logger.info(`Tokopedia Play API is running on port ${port}`); });
