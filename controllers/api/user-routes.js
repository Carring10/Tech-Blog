const router = require('express').Router();
const { User } = require('../../models');

// create new user, user sign up.
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // TODO: save their session

    res.json(userData);
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
        email: req.body.email,
      },
    });

    if (!userData) {
      res.json({ message: 'Your email or password is incorrect.' });
      return;
    }

    const correctPassword = await userData.checkPassword(req.body.password);

    if (!correctPassword) {
      res.json({ message: 'You are logged in.'})
    }
  } catch (err) {
    res.json(err);
  }
})


// TODO: destroy their session when they logout.

module.exports = router;