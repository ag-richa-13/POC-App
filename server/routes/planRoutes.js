const express = require('express');
const router = express.Router();
const planController = require('../controllers/planController');

// Fetching available plans route
router.get('/', planController.getPlans);

module.exports = router;
