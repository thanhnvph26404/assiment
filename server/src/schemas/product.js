import joi from 'joi'

export const productSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    price: joi.number().required().min(0),
    flavor: joi.string().required(),
    description: joi.string(),
    note: joi.string(),
    categoryId: joi.string().required(),
    createdAt: joi.date().default(() => new Date()),
    updatedAt: joi.date().default(() => new Date()),
    deletedAt: joi.date().default(null),
    deleted: joi.boolean().default(false),
});