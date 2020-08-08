const joi = require('@hapi/joi');
const Joi = require('@hapi/joi');

module.exports = joi.object().keys({
    name: Joi.string()
    .min(3)
    .max(30)
    .required(),

    username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    password: Joi.string()
    .regex(/^[a-zA-Z0-9]{3,30}$/)
    .required(),

    confirmPassword: Joi.any()
    .equal(Joi.ref('password'))
    .required(),

    email: Joi.string().
    email()
    .regex(/\S+@\S+\.\S+/),
})