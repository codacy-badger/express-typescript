import sequelizeInstance from './instance';
import ShopModel from './shop';
import UserModel from './user';

const commonOptions = { freezeTableName: true };

const connectedShopModel = ShopModel(sequelizeInstance, commonOptions);
const connectedUserModel = UserModel(sequelizeInstance, commonOptions);

export { connectedShopModel as ShopModel };
export { connectedUserModel as UserModel };

// connectedSequelize.sync();
export default {
  ShopModel: connectedShopModel,
  UserModel: connectedUserModel,
};
