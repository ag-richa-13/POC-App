const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Subscription routes
router.post('/subscribe', subscriptionController.createSubscription);
router.get('/subscriptions/:userId', subscriptionController.getUserSubscriptions);
router.post('/cancel/:subscriptionId', subscriptionController.cancelSubscription);

module.exports = router;
