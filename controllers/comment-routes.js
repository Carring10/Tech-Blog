const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// get post
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findOne({
      include: [
        {
          model: Comment,
          attributes: ['text', 'post_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username'],
          }
        },
        {
          model: User,
          required: true,
          attributes: ['username'],
        },
      ],
      where: {
        id: req.params.id,
      },
    });
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
      post_id: req.session.post_id,
    });
    res.json(commentData);
  } catch (err) {
    res.json(err);
  }
})

module.exports = router;