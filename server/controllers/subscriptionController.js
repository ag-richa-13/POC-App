const stripe = require('../config/stripe');
const Subscription = require('../models/Subscription');

// Create a subscription
const createSubscription = async (req, res) => {
  const { planId, userId, billingInterval, paymentMethod } = req.body;

  // Create a customer in Stripe and subscribe
  try {
    const customer = await stripe.customers.create({
      source: paymentMethod, // Payment method token
      email: userId, // Use user's email as a customer identifier
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: planId }],
    });

    // Store the subscription details in your database
    const newSubscription = new Subscription({
      userId,
      subscriptionId: subscription.id,
      billingInterval,
      planId,
    });
    await newSubscription.save();

    res.status(200).json({ message: 'Subscription created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Subscription creation failed' });
  }
};
