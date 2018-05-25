import express from 'express';
import { UserQuery } from '../query/index';

const UserRouter = express.Router();

UserRouter.get('/', async (req: any, res: any, next: any) => {
  try {
    const results = await UserQuery.findAll();
    res.json(results);
  } catch (err) {
    next(err);
  }
});

export default UserRouter;
