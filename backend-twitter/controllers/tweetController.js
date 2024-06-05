// controllers/tweetController.js
const Tweet = require('../models/Tweet');

exports.postTweet = async (req, res) => {
  const { text } = req.body;
  try {
    const tweet = new Tweet({
      userId: req.user.id,
      text,
    });

    await tweet.save();
    res.json(tweet);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};