const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const newPostRoutes = require('./new-post-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/new-post', newPostRoutes);
router.use('/comment', commentRoutes);

module.exports = router;