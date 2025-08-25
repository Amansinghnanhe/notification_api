import dotenv from 'dotenv';
dotenv.config();

// Define the shape of a single environment configuration
export interface DBConfigItem {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: 'mysql';
  storage?: string; 
  use_env_variable?: string;
}

// Define valid environment names
export type DBEnvironment = 'development' | 'production' | 'test';

// The entire configuration object keyed by environment
export type DBConfig = Record<DBEnvironment, DBConfigItem>;

// Actual configuration
const config: DBConfig = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Aman2000',
    database: process.env.DB_NAME || 'notification_db',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '',
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '',
    dialect: 'mysql',
  },
};

export default config;
