import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import config, { DBEnvironment } from './config/config';

dotenv.config();

// Define current environment
const env = (process.env.NODE_ENV || 'development') as DBEnvironment;

// Safely get DB config based on environment
const dbConfig = config[env];

// Initialize Sequelize instance
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false, // Optional: Disable SQL logging in console
  }
);

// Optional: Function to test the DB connection
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default sequelize;
