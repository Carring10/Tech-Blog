const router = require('express').Router();
const { Post, User } = require('../models');

// Get all posts.
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username', 'id'],
        },
      ],
      where: {
        user_id: req.session.user_id,
      }
    });
    // Loop through each post, turning them into a plain obj
    const posts = postData.map((post) => post.get({ plain: true }));
    // to have them all rendered to the landing page template with handlebars
    const loggedIn = req.session.loggedIn;

    if (loggedIn) {
      res.render('dashboard', { posts, loggedIn });
    } else {
      res.render('dashboard');
    }
  } catch (err) {
    res.json(err);
  }
});


// Get one post by ID.
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain: true });

    res.render('post', { post, loggedIn: req.session.loggedIn })
  } catch (err) {
    console.log(err);
  }
});

// Create a new post.
router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json(postData);
  } catch (err) {
    res.json(err);
  }
});

// Update a post by ID.
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.update(
      {
        title: req.body.title,
        description: req.body.description
      },
      {
        where: {
          id: parseInt(req.params.id),
        },
      }
    )
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