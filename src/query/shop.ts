import { ShopModel } from '../model/index';
import { IShopModel } from '../model/shop';

const ShopFindAll = (): Promise<IShopModel[]> => {
  return ShopModel.findAll();
};

const ShopFindAround = (lat: number, lng: number, distance: number): Promise<IShopModel[]>  => {
  return ShopModel.findAll();
};

const ShopQuery = {
  ShopFindAll,
  ShopFindAround,
};

export {
  ShopFindAll,
  ShopFindAround,
};

export default ShopQuery;
