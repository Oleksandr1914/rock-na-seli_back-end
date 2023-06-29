const axios = require("axios");

const getImagesControllerEighteen = async (req, res) => {
  const response = await axios.get(
    `https://${process.env.CLOUDI_KEY}:${process.env.CLOUDI_SECRET}@api.cloudinary.com/v1_1/dvks9blhu/resources/image/upload?prefix=rock-na-seli/2018`
  );

  res.json({ ...response.data });
};

const getImagesControllerNineteen = async (req, res) => {
  const response = await axios.get(
    `https://${process.env.CLOUDI_KEY}:${process.env.CLOUDI_SECRET}@api.cloudinary.com/v1_1/dvks9blhu/resources/image/upload?prefix=rock-na-seli/2019`
  );

  res.json({ ...response.data });
};

const getImagesControllerTwentyOne = async (req, res) => {
  const response = await axios.get(
    `https://${process.env.CLOUDI_KEY}:${process.env.CLOUDI_SECRET}@api.cloudinary.com/v1_1/dvks9blhu/resources/image/upload?prefix=rock-na-seli/2021`
  );

  res.json({ ...response.data });
};

module.exports = {
  getImagesControllerEighteen,
  getImagesControllerNineteen,
  getImagesControllerTwentyOne,
};
