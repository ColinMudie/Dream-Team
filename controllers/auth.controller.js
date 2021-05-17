const config = require("../config/auth.config");
const db = require("../models")
const User = db.User;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: 86400 // 24 hours
});
exports.signup = (req, res) => {
    const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        presets: [{
            filter: 500,
            attack: 0.1,
            decay: 1
        },
        {
            filter: 500,
            attack: 0.1,
            decay: 1
        },
        {
            filter: 500,
            attack: 0.1,
            decay: 1
        }]
    });
    
    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({
            user: {
                id: user._id,
                email: user.email,
                accessToken: token
            }
        });
    });
};

exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            res.status(200).send({
                id: user._id,
                email: user.email,
                accessToken: token
            });
        });
};

exports.savePresets = (req, res) => {
    console.log("hit savePreset");
    console.log(req.body);
    User
        .findOneAndUpdate({ _id: req.params.id }, { presets: req.body })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
}

exports.getPresets = (req, res) => {
    User.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))

}