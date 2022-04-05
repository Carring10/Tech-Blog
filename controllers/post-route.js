const router = require('express').Router();
const { Post } = require('../models');

// Get all posts.
router.get('/post', async (req, res) => {
  try {
    const postData = await Post.findAll()
    res.json(postData);
  } catch (err) {
    res.json(err);
  }
});

// Get one post by ID.
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    res.json(postData);
  } catch (err) {
    console.log(err);
  }
});

// Create a new post.
router.post('/post', async (req, res) => {
  try {
    const postData = await Post.create(req.body);
    res.json(postData);
  } catch (err) {
    res.json(err);
  }
});

// Update a post by ID.
router.put('/post/:id', async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.json(updatedPost);
  } catch (err) {
    res.json(err);
  }
});

// Delete post by ID.
router.delete('/post/:id', async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.json(deletedPost);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;