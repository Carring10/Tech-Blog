const router = require('express').Router();
const { Post } = require('../models');

// Get all posts.
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render('landingpage', { posts });
  } catch (err) {
    res.json(err);
  }
});

// Sign Up
router.get('/signup', (req, res) => {
  res.render('signup');
});

// Get one post by ID.
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    res.json(postData);
  } catch (err) {
    console.log(err);
  }
});

// Create a new post.
router.post('/', async (req, res) => {
  try {
    const postData = await Post.create(req.body);
    res.json(postData);
  } catch (err) {
    res.json(err);
  }
});

// Update a post by ID.
router.put('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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