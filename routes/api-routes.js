const path = require("path");
const router = require("express").Router();
const { verifySignUp } = require("../config/middleware");
const controller = require("../controllers/auth.controller");

//for passport
const express = require("express");
// API Routes
router.use( function ( req, res, next ) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
})

router.post( "/signup" , verifySignUp.checkDuplicateEmail , controller.signup );

router.post( "/login" , controller.signin )
// router.get("/test", function () { console.log(" hit index in routes"); })
// router.post("/signup", soundsController.create)
// router.post("/login", soundsController.login)


// GET USER DATA FOR CLIENT SIDE USE    
router.get("/user_data", (req, res) => {
  if (!req.user) {
    res.json({})
  } else {
    res.json({
      email: req.user.email,
      id: req.user.id,
      presets: res.user.presets
    });
  }
});


// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// router.use("/user", apiRoutes);
module.exports = router;