import bodyParser from 'body-parser';
import express from 'express';
import http from 'http';
import logger from 'morgan';
import path from 'path';

/* middleware */
import ErrorsMiddleware from './middlewares/ErrorHandlers';
import parametersParser from './middlewares/parameters-parser';

/* routes */
import { ShopRouter, UserRouter } from './routes/index';

class App {
  private readonly app: express.Application;
  private server: http.Server;

  constructor() {
    this.app = express();

    this.configure();
    this.route();
    this.errorHandler();

    this.server = new http.Server(this.app);
    this.server.listen(3000);
  }

  private configure(): void {
    // this.app.set('views', path.resolve('./src/views'));
    // this.app.set('view engine', 'jade');
    this.app.set('etag', false); // TODO delete no-cache
    this.app.set('trust proxy', true);
    this.app.use(logger(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private middleware(): void {
    this.app.use(parametersParser);
  }

  private route(): void {
    this.app.use('/user', UserRouter);
    this.app.use('/shop', ShopRouter);
  }

  private errorHandler(): void {
    this.app.use(ErrorsMiddleware);
  }

}

export default new App();
