const router = require('express').Router();
const { Post } = require('../models');

// Send to comment page
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain: true });

    res.render('comment', { post })
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;