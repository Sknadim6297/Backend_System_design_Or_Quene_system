const { getUserQueue } = require('../queues/userQueue');

const enqueueRequest = async (req, res) => {
  const userQueue = getUserQueue(req.user.username);
  const { task } = req.body;

  await userQueue.add({ task });

  res.json({ message: 'Request added to queue' });
};

module.exports = { enqueueRequest };
