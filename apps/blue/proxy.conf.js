const winston = require('winston');

const logProvider = () => {
  return winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
      winston.format.splat(),
      winston.format.simple()
    ),
    transports: [new winston.transports.Console()],
  });
};

module.exports = [
  {
    context: ['/user'],
    target: `http://localhost:3000`,
    secure: false,
    logLevel: 'info',
    logProvider: logProvider,
  },
];
