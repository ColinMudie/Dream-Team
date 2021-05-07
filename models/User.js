const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    presets: [{
        filter: { type: Number },
        attack: { type: Number },
        decay: { type: Number }
    }]
})

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
UserSchema.pre("beforeCreate", user => {
    user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null
    );
});


const User = mongoose.model("User", UserSchema);
module.exports = User;