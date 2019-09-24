import { config } from './config';
import { App } from './app';

const app = new App();
app.listen(config.port, (err: any) => {
  if (err) {
    console.error(err);
  }
  console.log(`server is listening on ${config.port}`);
});
