import * as env from 'dotenv';
import express, { type Application, type NextFunction, type Request, type Response } from 'express';
import routes from './routes';

env.config();
const app: Application = express();
const port: number = parseInt(process.env.APP_PORT as string, 10);

app.use('/hello', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello World!' });
});

routes(app);

app.listen(port, () => { console.log(`Tokopedia Play API is running on port ${port}`); });
