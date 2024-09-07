const Queue = require('bull');
const { redisUrl } = require('../config');

const userQueues = {};

const getUserQueue = (username) => {
  if (!userQueues[username]) {
    userQueues[username] = new Queue(username, redisUrl);
  }
  return userQueues[username];
};

module.exports = { getUserQueue };
