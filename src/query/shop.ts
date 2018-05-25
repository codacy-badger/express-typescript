import { ShopModel } from '../model/index';
import { IShopModel } from '../model/shop';

class ShopQuery {

  public findAll(): Promise<IShopModel[]> {
    return ShopModel.findAll();
  }

  public findArround(lat: number, lng: number, distance: number): Promise<IShopModel[]>  {
    return ShopModel.findAll();
  }
}

export default new ShopQuery();
