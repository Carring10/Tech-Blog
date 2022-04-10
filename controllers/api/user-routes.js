const router = require('express').Router();
const { User } = require('../../models');

// create new user, user sign up.
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    // TODO: save their session
    // Sets the login variable to true
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(userData);
    });

    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// TODO: a user can login with the credientials they used to sign up
// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userData) {
      res.status(400).json({ message: 'Your username is incorrect.' });
      return;
    }

    const correctPassword = userData.checkPassword(req.body.password);

    if (!correctPassword) {
      res.json({ message: 'Your password is incorrect.'});
      console.log('here')
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json({ message: 'You are logged in.' }).redirect('/dashboard');
    })


  } catch (err) {
    res.json(err);
  }
})


// TODO: destroy their session when they logout.
// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;