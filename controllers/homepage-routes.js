const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Get all posts.
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          required: true,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['text'],
        },
      ],
    });
    // Loop through each post, turning them into a plain obj
    const posts = postData.map((post) => post.get({ plain: true }));
    // to have them all rendered to the landing page template with handlebars
    console.log('home', req.session.loggedIn)
    const loggedIn = req.session.loggedIn;
    res.render('home', { posts, loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get comments
// router.get('/', async (req, res) => {
//   try {
//     const commentData = await Comment.findAll({});
//     const comments = commentData.map((comment) => comment.get({ plain: true }));

//     res.render('home', { comments, loggedIn: req.session.loggedIn })
//   } catch (err) {
//     console.log(err);
//   }
// })

// Sign Up
router.get('/signup', (req, res) => {
  // Render handlebars sign up page.
  res.render('signup');
}); 

// Login
router.get('/login', (req, res) => {
  // Render handlebars login page.
  res.render('login');
});



module.exports = router;