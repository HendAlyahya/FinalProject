const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const { isEmail } = require("validator")
const bcrypt = require("bcrypt")


const proudctSchema = new Schema({
    name: { type: String, required: [true, " proudct name should be provided"] },
    category: { type: String ,required: [true, " proudct category should be provided"] },
    description: { type: String, required: [true, " proudct description should be provided"] },
    image: { type: String, required: [true, " proudct image should be provided"] },
    comment:[{type: Schema.Types.ObjectId, ref:"comment"}]
})



const proudct = mongoose.model('proudct', proudctSchema);

module.exports = proudct
