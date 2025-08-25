import express from 'express';
import notificationRoutes from './routes/notifications';
import db from './models';// Automatically initializes Sequelize + models

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Register routes
app.use('/api', notificationRoutes);

// Start server after DB connection
const startServer = async () => {
  try {
    await db.sequelize.authenticate(); // test DB connection
    console.log('Database connected successfully.');

    // Optionally sync models
    await db.sequelize.sync({ alter: true });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the process if DB connection fails
  }
};

startServer();

export default app;
