const joi = require('joi');

const schema = joi.object ({
  userId: joi.string().required(),
  organization: joi.string().required(),
  createdAt: joi.string().required(),
  updatedAt: joi.string().required(),
  products: joi.string().required(),
  marketValue: joi.string().required(),
  ddress: joi.string().required(),
  ceo: joi.string().required(),
  country: joi.string().required(),
  noOfEmployees: joi.number().required(),
  employees: joi.string().required(),
})

export const postValidator = (req: any, res: any, next: any) => {
  schema.validateAsync(req, res, next)
  // .then(() => next())
  // .catch((err: any) => {
  //   res.json(err.message);
  // });
}

