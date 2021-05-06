const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

const soundsController = require("../controllers/soundsController");
// const isAuthenticated = require("../config/middleware/isAuthenticated");
//for passport
const express = require("express");
// API Routes

router.get("/test", function(){console.log(" hit index in routes");})
router.post("/create", soundsController.create)

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
router.use("/user", apiRoutes);
module.exports = router;