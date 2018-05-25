import Sequelize from 'sequelize';

const sequelizeInstance = new Sequelize('test', 'postgres', 'root', {
  dialect: 'postgres',
  host: 'localhost',
  operatorsAliases: false,
  pool: {
    acquire: 30000,
    idle: 10000,
    max: 5,
    min: 0,
  },
});

export { sequelizeInstance };
export default sequelizeInstance;
