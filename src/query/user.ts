import { UserModel } from '../model/index';
import { IUserModel } from '../model/user';

class UserQuery {

  public findAll(): Promise<IUserModel[]> {
    return UserModel.findAll();
  }
}

export default new UserQuery();
