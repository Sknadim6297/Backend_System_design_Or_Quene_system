const { getUserQueue } = require('../queues/userQueue');

const processQueue = (username) => {
  const queue = getUserQueue(username);

  queue.process(async (job) => {
    console.log(`Processing task: ${job.data.task} for user: ${username}`);
    // Process task logic here
  });

  queue.on('completed', (job) => {
    console.log(`Completed task: ${job.data.task} for user: ${username}`);
  });

  queue.on('failed', (job, err) => {
    console.error(`Failed task: ${job.data.task} for user: ${username}, error: ${err.message}`);
  });
};

module.exports = { processQueue };
