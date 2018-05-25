
import * as Sequelize from 'sequelize';

export interface IShopAttributes {
  id?: number;
  adress: string;
  city: string;
  postalCode: string;
  position: string;
}

export type IShopInstance = Sequelize.Instance<IShopAttributes> & IShopAttributes;

export interface IShopModel extends Sequelize.Model<IShopInstance, IShopAttributes> {
    id: number;
    adress: string;
    city: string;
    postalCode: string;
    position: string;
}

export default (sequelize: Sequelize.Sequelize, commonOptions = {}) => {
  return sequelize.define<IShopModel, IShopAttributes>('shop',
    {
      adress: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      position: Sequelize.GEOMETRY('POINT', 4326),
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING(5),
      },
    },
    commonOptions,
  );
};
