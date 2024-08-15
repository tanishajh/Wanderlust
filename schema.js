const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().optional(),
    image: Joi.string().uri().allow(''), // Allow empty strings
    price: Joi.number().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
  }).required()
});

const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required(),
  }).required(),
});

module.exports = { reviewSchema };