const router = require('express').Router();
const { Post } = require('../models');

// Send to new post page
router.get('/', (req, res) => {
  res.render('new-post');
})

module.exports = router;