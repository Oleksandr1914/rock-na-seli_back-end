const { Group } = require("../db/groupModel");
const { emailHtml } = require("../utils/emailHtm");
const nodemailer = require("nodemailer");

const addGroup = async ({
  bandName,
  email,
  contactPersonName,
  phone,
  address,
  styleGroup,
  informationGroup,
  listOfInstrumentalBend,
  linksSocialNetworkPage,
  linksToBandVideo,
}) => {
  const doc = await Group.create({
    bandName,
    email,
    contactPersonName,
    phone,
    address,
    styleGroup,
    informationGroup,
    listOfInstrumentalBend,
    linksSocialNetworkPage,
    linksToBandVideo,
  });

  const config = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: process.env.META_EMAIL,
      pass: process.env.PASSWORD,
    },
  };

  const html = emailHtml(
    bandName,
    email,
    contactPersonName,
    phone,
    address,
    styleGroup,
    informationGroup,
    listOfInstrumentalBend,
    linksSocialNetworkPage,
    linksToBandVideo
  );
  const transporter = nodemailer.createTransport(config);
  const emailOptions = {
    from: process.env.META_EMAIL,
    to: process.env.META_UKRNET,
    subject: "Nodemailer test",
    html: html,
  };

  transporter.sendMail(emailOptions).catch((err) => console.log(err));

  return { doc };
};

module.exports = {
  addGroup,
};
