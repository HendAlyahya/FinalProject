const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const { isEmail } = require("validator")
const bcrypt = require("bcrypt")


const commentsSchema = new Schema({
    comment: { type: String, required: [true, " comments name should be provided"] },
    person:{
        type: Schema.Types.ObjectID,
        ref:"Personal"
    },

    product:{
        type: Schema.Types.ObjectID,
        ref:"proudct"
    }
    
})



const comments = mongoose.model('comment', commentsSchema);

module.exports = comments