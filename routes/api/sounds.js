const router = require("express").Router();
const soundsController = require("../../controllers/soundsController");

router.route("/")
    //should not need these
    // .get(soundsController.findAll)
    // .post(soundsController.create);

router
    .route("/:id")
    .get(soundsController.update)
    //should not need this one
    // .delete(soundsController.remove);

module.exports = router;