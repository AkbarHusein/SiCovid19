require('dotenv').config();

const checkNODE_ENV = () => {
  return process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;
};

const CONFIG = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: checkNODE_ENV(),
};

module.exports = CONFIG;
