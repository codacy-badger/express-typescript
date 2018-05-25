
import * as Sequelize from 'sequelize';

export interface IUserAttributes {
  id?: number;
  email: string;
  name: string;
  password: string;
}

export type IUserInstance = Sequelize.Instance<IUserAttributes> & IUserAttributes;

export interface IUserModel extends Sequelize.Model<IUserInstance , IUserAttributes> {
    id: number;
    email: string;
    name: string;
    password: string;
}

export default (sequelize: Sequelize.Sequelize, commonOptions = {}) => {
  return sequelize.define<IUserModel, IUserAttributes>('user',
    {
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    },
    commonOptions,
  );
};
