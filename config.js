// config.js
import Constants from 'expo-constants';

const ENV = {
  dev: {},
  staging: {},
  prod: {}
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  if (env === null || env === undefined || env === '') return ENV.dev;
  if (env.indexOf('staging') !== -1) return ENV.staging;
  if (env.indexOf('prod') !== -1) return ENV.prod;
  return ENV.dev;
};

export default getEnvVars;
