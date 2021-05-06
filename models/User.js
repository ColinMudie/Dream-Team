const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    presets: [{
        filter: { type: Number },
        attack: { type: Number },
        decay: { type: Number }
    }]
})
UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", UserSchema);
module.exports = User;