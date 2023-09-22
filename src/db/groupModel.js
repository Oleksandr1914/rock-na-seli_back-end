const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    bandName: {
      type: String,
      default: null,
      require: true,
    },
    email: {
      type: String,
      default: null,
      require: true,
    },
    contactPersonName: {
      type: String,
      default: null,
      require: true,
    },
    phone: {
      type: String,
      default: null,
      require: true,
    },
    address: {
      type: String,
      default: null,
      require: true,
    },
    styleGroup: {
      type: String,
      default: null,
      require: true,
    },
    informationGroup: {
      type: String,
      default: null,
      require: true,
    },
    listOfInstrumentalBend: {
      type: String,
      default: null,
      require: true,
    },
    linksSocialNetworkPage: {
      type: String,
      default: null,
    },
    linksToBandVideo: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = { Group };
