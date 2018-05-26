import express from 'express';
import { UserFindAll } from '../query/user';

const UserRouter = express.Router();

UserRouter.get('/', async (req: any, res: any, next: any) => {
  console.log('user get');
  try {
    const results = await UserFindAll();
    res.json(results);
  } catch (err) {
    next(err);
  }
});

export default UserRouter;
