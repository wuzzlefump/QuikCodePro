const path = require('path');
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const codeRoutes = require('./codes')

// API Routes
router.use('/users', userRoutes);
router.use('/codes', codeRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;