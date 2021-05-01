const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SoundSchema = new Schema ({
    username: { type: String, required: true},
    password: { type: String, required: true},
    date: { type: Date, default: Date.now },
    presets: [{ 
        filter: { type: Number },
        attack: { type: Number },
        decay: { type: Number }
    }]
})

const Sound = mongoose.model("Sound", SoundSchema);

module.exports = Sound;