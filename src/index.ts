import dotenv from 'dotenv';
import app from './app';
import { sequelize } from './db';


dotenv.config(); // Load .env variables

const PORT = process.env.PORT || 3000;

// First, connect to the database
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');

    // Then start the Express server
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Exit the process if DB connection fails
  });
