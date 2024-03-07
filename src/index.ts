import {ApplicationConfig, OntimeLogApplication} from './application';
import { host, port } from './config/config.env';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  const app = new OntimeLogApplication(options);
  await app.boot();
  await app.start();

  console.info(`[APP] Running on ${host}`);
  return app;
}

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port,
      // The `gracePeriodForClose` provides a graceful close for http/https
      // servers with keep-alive clients. The default value is `Infinity`
      // (don't force-close). If you want to immediately destroy all sockets
      // upon stop, set its value to `0`.
      // See https://www.npmjs.com/package/stoppable
      gracePeriodForClose: 5000, // 5 seconds
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
