const router = require('express').Router();
const { Post, Comment } = require('../models');

// get comment
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain: true });

    res.render('comment', { post, loggedIn: req.session.loggedIn })
  } catch (err) {
    console.log(err);
  }
})

// Create new comment
router.post('/:id', async(req, res) => {
  try {
    const commentData = await Comment.create({
      text: req.body.text,
      user_id: req.session.user_id,
      loggedIn: req.session.loggedIn,
    });
    res.json(commentData);
  } catch (err) {
    res.json(err);
  }
})

module.exports = router;