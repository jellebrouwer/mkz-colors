module.exports = (on, config) => {
  console.log(config);
  return config;
};
require('@applitools/eyes-cypress')(module);
