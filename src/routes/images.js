const express = require("express");
const {
  getImagesControllerEighteen,
  getImagesControllerNineteen,
  getImagesControllerTwentyOne,
} = require("../controllers/imagesControllers/ImagesControllers");
const { asyncWrapper } = require("../helpers/apiHelpers");

const router = express.Router();

router.get("/2018", asyncWrapper(getImagesControllerEighteen));
router.get("/2019", asyncWrapper(getImagesControllerNineteen));
router.get("/2021", asyncWrapper(getImagesControllerTwentyOne));

module.exports = router;
