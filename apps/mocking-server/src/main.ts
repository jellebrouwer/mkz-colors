import * as express from 'express';
import * as path from 'path';

const apimock = require('@ng-apimock/core');
const devInterface = require('@ng-apimock/dev-interface');

const mocksPath = path.resolve('apps/mocking-server/src/mocks');
const defaultPort = 3000;

const commandLineArgs = process.argv.slice(2);
const port = commandLineArgs
  .filter((arg) => arg.includes('port'))
  .map((arg) => arg.split('=')[1])[0];

const mockingServer = (apimockOptions, port, middlewareConfig) => {
  const app = express();
  app.set('port', port);

  apimock.processor.process(apimockOptions);

  apimock.configure({
    middleware: middlewareConfig,
  });

  app.use(apimock.middleware);
  app.use('/mocking', express.static(devInterface));

  const server = app.listen(app.get('port'), () => {
    console.log('@ng-apimock/core running on port', app.get('port'));
  });

  server.on('error', console.error);
};

mockingServer(
  {
    src: mocksPath,
    patterns: {
      mocks: '**/*.mock.js',
      presets: '**/*.mock.js',
    },
    watch: true,
  },
  port || defaultPort,
  {
    useHeader: true,
    identifer: `ngapimock_id_${port}`,
  }
);
