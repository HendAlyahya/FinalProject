const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const { isEmail } = require("validator")
const bcrypt = require("bcrypt")

const PersonalSchema = new Schema({
    name: { type: String, required: [true, "Personall name should be provided"] },
    Phone: { type: Number },
    Address: { type: String },
    image: { type: String, required: [true, "Personall image should be provided"] },
    gender: { type: String },
    proudct:[{type: Schema.Types.ObjectId, ref:"proudct"}],
    userType:{
        type: String,
        enum:["buyer","seller"],
        default:"buyer",
    },
    email: {
        type: String,
        required: [true, "PLEASE Enter an Email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "PLEASE Enter a valid Email"]

    },
    password: {
        type: String,
        required: [true, "PLEASE Enter an Password"],
        minlength: [6, "MINIMUM Password length is 6 characters"],

    }
})


PersonalSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})
PersonalSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}


const Personal = mongoose.model('Personal', PersonalSchema);

module.exports = Personal