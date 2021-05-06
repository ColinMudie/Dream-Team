const router = require("express").Router();
const soundsController = require("../../controllers/soundsController");
const passport = require("../../config/passport");

// router.route("/")
//     //should not need these
//     // .get(soundsController.findAll)
//     // .post(soundsController.create);


// SIGNUP CREATE NEW USER
router.post("/signup", soundsController.create)
    //should not need this one
    // .delete(soundsController.remove);

// LOGIN SEARCH USER
router.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
        email: req.user.email,
        id: req.user.id
    })
})

// LOGOUT
router.get("/logout", (req,res) => {
    res.logout();res.redirect("/");
})

// GET USER DATA FOR CLIENT SIDE USE    
router.get("/api/user_data", (req, res) => {
    if (!req.user){
        res.json({})
    } else {
        res.json({
            email: req.user.email,
            id: req.user.id,
            presets: res.user.presets
        });
    }
});

module.exports = router;