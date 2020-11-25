const router = require('express').Router();
const userRoutes = require('./userRoutes');
const codeRoutes = require('./codeRoutes');
const followerRoutes = require('./followerRoutes');
const { route } = require('./codeRoutes');

router.use('/users', userRoutes);
router.use('/codes', codeRoutes);
route.use('/followers', followerRoutes);

module.exports = router;
