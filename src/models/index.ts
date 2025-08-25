import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes, ModelStatic } from 'sequelize';
import config_obj, { DBEnvironment, DBConfigItem } from '../config/config';


const basename = path.basename(__filename);
const env: DBEnvironment = (process.env.NODE_ENV as DBEnvironment)  || 'development';
const config: DBConfigItem = config_obj[env];

// Sequelize initialization
let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] as string, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// DB object type
interface DB {
  [key: string]: ModelStatic<any> | Sequelize | typeof Sequelize;
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
}

// DB object
const db: DB = {
  sequelize,
  Sequelize,
};

// Read all model files in the same directory (excluding index.ts)
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      (file.endsWith('.ts') || file.endsWith('.js')) &&
      !file.endsWith('.test.ts') &&
      !file.endsWith('.test.js')
    );
  })
  .forEach((file) => {
    const modelPath = path.join(__dirname, file);
    const modelImport = require(modelPath);

    const modelFactory = modelImport.default;
    if (typeof modelFactory === 'function') {
      const model = modelFactory(sequelize, DataTypes);
      db[model.name] = model;
    }
  });

// If models have `associate()` method, call it to setup relationships
Object.keys(db).forEach((modelName) => {
  const model = db[modelName] as any;
  if (typeof model.associate === 'function') {
    model.associate(db);
  }
});

export default db;
