"use strict";
const Joi = require("joi");

const validator = { 
  signUp: async (req, res, next) => {
    const { name, email, password, confirm_password, phone, birthday } = req.body;
    // console.log( name, email, password, confirm_password, phone, birthday );
    const schema = Joi.object().keys({
      name: Joi.string().min(3).max(20).required(),
      email: Joi.string().email().min(6).max(35).required(),
      password: Joi.string().min(3).max(20).required(),
      confirm_password: Joi.string().required(),
      phone: Joi.string().regex(/^\d{3}-\d{4}-\d{4}$/).required(),
      birthday: Joi.date().max('1-1-2023').iso(),
    });

    try {
      await schema.validateAsync(req.body);
    } catch (e) {
      return res.status(400).json({ code: 400, message: e.message });
    }
    next();
  },
};

module.exports = validator;
