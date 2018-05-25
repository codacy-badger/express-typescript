/* Inject query parameters to req.body JSON */
export default (req: any, res: any, next: () => void) => {
  Object.keys(req.query).forEach((key) => {
    req.body[key] = req.query[key];
  });
  delete req.query;
  Object.keys(req.params).forEach((key) => {
    req.body[key] = req.params[key];
  });
  delete req.params;
  next();
};
