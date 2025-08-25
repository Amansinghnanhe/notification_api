// src/db.ts

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import config, { DBEnvironment } from './config/config';
import initNotificationModel from './models/Notification';

dotenv.config();

// Get current environment or default to 'development'
const env = (process.env.NODE_ENV as DBEnvironment) || 'development';

// Get DB config for the current environment
const dbConfig = config[env];

// Initialize Sequelize instance
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: env === 'development', // Enable logging only in development
  }
);

// Initialize models
const Notification = initNotificationModel(sequelize);

// Sync models
sequelize.sync()
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((err) => {
    console.error('Failed to sync models:', err);
  });

// Function to test DB connection
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export { sequelize, Notification };
