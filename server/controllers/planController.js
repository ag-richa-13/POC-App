const Plan = require('../models/Plan');

// Fetch available plans
const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching plans' });
  }
};

module.exports = { getPlans };
