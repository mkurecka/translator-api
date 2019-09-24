import * as express from "express";

import Translator from "./modules/translator";

export class App {
  private express: express.Application;
  constructor() {
    this.express = express();
    this.addMiddleware();
    this.addRoutes();
    this.addErrorHandlers();
  }

  public listen(...args: any[]) {
    this.express.listen(...args);
  }

  private addMiddleware() {}

  private addErrorHandlers() {
    const errorHandler = (
      error: any,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      console.error(error);
      res
        .status(500)
        .json({ message: error.message ? error.message : "Unspecified error" });
    };
    this.express.use(errorHandler);
  }

  private addRoutes() {
    this.express.get("/", (req, res) => {
      res.status(200).json({ status: "OK" });
    });

    const apiRouter = express.Router();
    apiRouter.use("/translate", Translator);

    this.express.use("/api", apiRouter);
  }
}
