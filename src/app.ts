import express from 'express';
import notificationRoutes from './routes/notifications';
import sequelize, { testConnection } from './db';

const app = express();

app.use(express.json());

app.use('/api', notificationRoutes);

testConnection().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch((error) => {
  console.error('Failed to connect to the database. Server not started.', error);
  process.exit(1); // Exit the process with failure code
});

export default app;
