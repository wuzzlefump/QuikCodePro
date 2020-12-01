const router = require("express").Router();
const codeController = require("../../controllers/codeController");


router.route("/findall").get(codeController.findAll)
  

router.route("/save").post(codeController.create);

    
router
  .route("/codes/:id")
  .get(codeController.findById)
  .put(codeController.update)
  .delete(codeController.remove)

// router
//   // .route("/codes/:keywords")
//   .get(codeController.find)
  

module.exports = router;