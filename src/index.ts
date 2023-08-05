import * as env from 'dotenv';
import express, { type Application, type NextFunction, type Request, type Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import { logger } from './utilities/logger';

env.config();
const app: Application = express();
const port: number = parseInt(process.env.APP_PORT as string, 10);

// parse body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors access handler
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
});

app.use('/hello', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World!' });
});

routes(app);

app.listen(port, () => { logger.info(`Tokopedia Play API is running on port ${port}`); });
