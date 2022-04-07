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
    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;