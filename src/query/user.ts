import { UserModel } from '../model/index';
import { IUserModel } from '../model/user';

export const UserFindAll = (): Promise<IUserModel[]> => {
  return UserModel.findAll();
};

const UserQuery = {
  UserFindAll,
};

export default UserQuery;
