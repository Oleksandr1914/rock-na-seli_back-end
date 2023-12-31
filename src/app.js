const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { errorHandler } = require("./helpers/apiHelpers");
const imagesRouter = require("./routes/images");
const groupRoutes = require("./routes/group");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use("/rock", imagesRouter);
app.use("/rock", groupRoutes);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

module.exports = app;
