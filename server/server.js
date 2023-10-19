const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import routes for authentication, plans, and subscriptions
const authRoutes = require('./routes/authRoutes');
const planRoutes = require('./routes/planRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

// Use routes
app.use('/auth', authRoutes);
app.use('/plans', planRoutes);
app.use('/subscriptions', subscriptionRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
