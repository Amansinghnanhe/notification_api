import { Umzug, SequelizeStorage } from 'umzug';
import path from 'path';
import sequelize from './db'; 


const umzug = new Umzug({
  migrations: {
    glob: 'src/migrations/*.ts',
  },
  context: {}, 
  logger: console,
});

umzug.up().then(() => {
  console.log('Migrations completed');
}).catch((err) => {
  console.error('Migration error:', err);
});
