const router = require("express").Router();
const soundRoutes = require("./sounds");

router.use("/sounds", soundRoutes);

module.exports = router;