import dotenv from 'dotenv';
dotenv.config();

// Declare allowed environments (add more if needed)
export type DBEnvironment = 'development';

// Define the shape of DB config
interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: 'mysql'; // Narrow type
}

// Define configuration per environment
const config: Record<DBEnvironment, DBConfig> = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Aman2000',
    database: process.env.DB_NAME || 'notification_db',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql', // 'as const' not needed with interface
  },
};

export default config;
