const axios = require("axios");
const cloudinary = require("cloudinary");

const getImagesControllerEighteen = async (req, res) => {
  cloudinary.config({
    secure: true,
  });

  cloudinary.v2.api
    .resources({ max_results: 50, type: "upload", prefix: "rock-na-seli2018" })
    .then((result) => res.json({ ...result.resources }));
};

const getImagesControllerNineteen = async (req, res) => {
  cloudinary.config({
    secure: true,
  });

  cloudinary.v2.api
    .resources({ max_results: 50, type: "upload", prefix: "rock-na-seli2019" })
    .then((result) => res.json({ ...result.resources }));
};

const getImagesControllerTwentyOne = async (req, res) => {
  cloudinary.config({
    secure: true,
  });

  cloudinary.v2.api
    .resources({ max_results: 50, type: "upload", prefix: "rock-na-seli2021" })
    .then((result) => res.json({ ...result.resources }));
};

module.exports = {
  getImagesControllerEighteen,
  getImagesControllerNineteen,
  getImagesControllerTwentyOne,
};
