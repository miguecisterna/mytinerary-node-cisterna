import joi from "joi";

let registerSchema = joi.object({
  name: joi.string().required().min(3).max(25).messages({
    'string.min': 'Name must have at least 3 characters long 🙂',
    'string.max': 'Name must have less than or equal to 25 characters 🙂',
    'any.required': 'Name is required 😋',
    'string.empty': "Name cannot be empty 😋"

  }),
  mail: joi.string().required(),
  password: joi.string().required(),
  country: joi.string().required()
})

export default registerSchema;