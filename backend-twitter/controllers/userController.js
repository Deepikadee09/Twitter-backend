// controllers/userController.js
const User = require('../models/User');
const Tweet = require('../models/Tweet');

exports.getTimeline = async (req, res) => {
  const { userId } = req.params;
  const { cursor } = req.query;
  const limit = 10;

  try {
    let query = { userId };
    if (cursor) {
      query = { ...query, _id: { $lt: cursor } };
    }

    const tweets = await Tweet.find(query)
      .sort({ _id: -1 })
      .limit(limit);

    const nextCursor = tweets.length === limit ? tweets[tweets.length - 1]._id : null;

    res.json({ tweets, nextCursor });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
