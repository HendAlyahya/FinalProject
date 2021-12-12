const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const PersonalSchema = new Schema({
    name: { type: String  ,required: [true, "Personall name should be provided"]},
    Phone: { type: Number},
    Address: { type: String ,required: [true, "Personall Address should be provided"]},
    image: { type: String , required: [true, "Personall image should be provided"]},
    gender: { type: String },
    Email: { type: String },
})
const Personal = mongoose.model('Personal', PersonalSchema);

module.exports ={Personal}