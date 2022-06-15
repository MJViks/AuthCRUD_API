import Joi from '@hapi/joi';

const loginValidation = (data) => {
    const schema = Joi.object({
        userName: Joi.string().min(4).max(24).required(),
        userPass: Joi.string().max(24).required()
    })
    return schema.validate(data);
}

export default loginValidation