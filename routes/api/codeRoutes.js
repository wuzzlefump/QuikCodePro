const router = require("express").Router();
const codeController = require("../../controllers/codeController");


router.route("/codes")
  .get(codeController.findAll)
  .post(codeController.create);

router
  .route("/codes/:id")
  .get(codeController.findById)
  .put(codeController.update)
  .delete(codeController.remove);

router
  .route("codes/:keywords")
  .get(codeController.find)
  

module.exports = router;