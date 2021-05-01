const mongoose = require("mongoose");
const db = require("../models");
const { connect } = require("../routes");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/soundsdb"
);

const soundSeed = [
    {
        username: "username",
        password: "123",
        date: new Date(Date.now()),
        presets: [{
            filter: 0,
            attack: 1,
            decay: 2
        }, {
            filter: 1,
            attack: 2,
            decay: 3
        }]
    }
]

db.Sound
    .collection.insertMany(soundSeed)
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });