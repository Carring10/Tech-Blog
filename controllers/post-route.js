const router = require('express').Router();
const { Post } = require('../models');

// Get all posts.
router.get('/post', async (req, res) => {
  try {
    const postData = await Post.findAll()
    console.log(postData);
    res.json(postData);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;