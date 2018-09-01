const express = require('express');
const itemRoutes = require('./item');

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount items routes at /items
router.use('/items', itemRoutes);

module.exports = router;
