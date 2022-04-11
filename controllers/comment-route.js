const router = require('express').Router();
const { Post, Comment } = require('../models');

// get comment
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain: true });
    console.log('here', post)

    res.render('comment', { post })
  } catch (err) {
    console.log(err);
  }
})

// Create new comment
router.post('/:id', async(req, res) => {
  try {
    const commentData = await Comment.create({
      text: req.body.text,
    });
    res.json(commentData);
  } catch (err) {
    res.json(err);
  }
})

module.exports = router;