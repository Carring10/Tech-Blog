const router = require('express').Router();

const postRoutes = require('./post-route.js');

router.use('/', postRoutes);

module.exports = router;