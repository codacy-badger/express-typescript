import config from 'config';
import Sequelize from 'sequelize';

const sequelizeInstance = new Sequelize(
  config.get('db.database'),
  config.get('db.username'),
  config.get('db.password'),
  {
    ...config.get('db.options'),
    operatorsAliases: false,
    pool: {
      acquire: 30000,
      idle: 10000,
      max: 5,
      min: 0,
    },
  },
);

export { sequelizeInstance };
export default sequelizeInstance;
