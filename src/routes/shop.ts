import * as express from 'express';
// import { sign, verifyAdmin } from '../middlewares/jwt';

const ShopRouter = express.Router();

/* Get nearest Shops  */
/* ShopRouter.get('/', async (req: any, res: any, next: any) => {
  const date = new Date();
  const {
    lat, lng, distance = 1000, day = date.getDay(),
    time = date.getHours() + (date.getMinutes() * 0.01),
  } = req.body;
}); */

/* Save new shop to database */
// ShopRouter.post('/', verifyAdmin, async (req: any, res: any, next: any) => {
  /*
  const { name, adress, city, lat, lng } = req.body;
  const location = { type: 'Point', coordinates: [parseFloat(lat), parseFloat(lng)] };
  const shopData = { name, adress, city, location };
  try {
    const shop = await req.db.collection('shop').insert(shopData);
    res.status(201).json(shop.ops[0]);
  } catch (err) {
    next(err);
    return;
  }
  */
// });

/* TODO : Delete */
ShopRouter.get('/insert', (req, res) => {
  res.render('index');
});

/* TODO : Delete */
ShopRouter.get('/find', (req, res) => {
  res.render('find');
});

export default ShopRouter;
