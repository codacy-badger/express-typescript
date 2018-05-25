import jwt from 'jsonwebtoken';

const secret = 'Yl5YcfUtJCwy9Xg4gwC5u00PWXqkEaDYAjBms6JBImMNTtqlQMZSsYJ0gSUu420';
/*
const defaultOptions = {
  expiresIn: '1h',
};
*/

export const sign = async (res: any, next: any, data: any) => {
  try {
    /*
    let options = defaultOptions;
    if (!data.admin) {
      Object.assign(options, { ignoreExpiration: true });
    }
    */
    const options = data.admin ? { expiresIn: '1h' } : {};
    const token = await jwt.sign(data, secret, options);
    res.json({ token });
  } catch (e) {
    next(500);
  }
};

export const verify = async (req: any, res: any, next: any) => {
  if (!req.body.token) {
    next(401);
    return;
  }
  try {
    await jwt.verify(req.body.token, secret);
    next();
  } catch (e) {
    next(401);
  }
};
/*
export const verifyAdmin = async (req: any, res: any, next: any) => {
  if (!req.body.token) {
    next(401);
    return;
  }
  try {
    const decode = await jwt.verify(req.body.token, secret);
    if (!decode.admin) {
      next(401);
      return;
    }
    next();
  } catch (e) {
    next(401);
  }
};
*/