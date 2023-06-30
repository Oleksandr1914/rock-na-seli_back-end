const express = require("express");
const {
  addGroupController,
} = require("../controllers/groupControllers/groupControllers");
const { asyncWrapper } = require("../helpers/apiHelpers");

const router = express.Router();

router.post("/group", asyncWrapper(addGroupController));

module.exports = router;
