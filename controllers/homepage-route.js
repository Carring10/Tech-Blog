const router = require('express').Router();
const { Post } = require('../models');

// Get all posts.
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    // Loop through each post, turning them into a plain obj
    const posts = postData.map((post) => post.get({ plain: true }));
    // to have them all rendered to the landing page template with handlebars
    res.render('landingpage', { posts });
  } catch (err) {
    res.json(err);
  }
});

// Sign Up
router.get('/signup', (req, res) => {
  // Render handlebars sign up page.
  res.render('signup', { loggedIn: req.session.loggedIn });
}); 

// Login
router.get('/login', (req, res) => {
  // Render handlebars login page.
  res.render('login', { loggedIn: req.session.loggedIn });
});

// // dashboard
// router.get('/dashboard', (req, res) => {
//   // Render handlebars dashboard page.
//   res.render('dashboard', { loggedIn: req.session.loggedIn });
// });


module.exports = router;