require("dotenv").config();
import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
const port: Number = parseInt(process.env.APP_PORT as string, 10);

app.use("/hello", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ data: "Hello World!" });
});

app.listen(port, () => console.log(`Tokopedia Play API is running on port ${port}`));