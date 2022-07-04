const joi = require("@hapi/joi");

const schema ={
    user:joi.object({
        id:joi.string().required(),
        login :joi.string().email().required,
        password : joi.string().pattern(new RegExp("^[a-zA-Z0-9][3,30]$")).required(),
        age : joi.number().max(130).min(5).required(),
    })
};

module.exports=schema;