const { Group } = require("../db/groupModel");

const addGroup = async ({
  bandName,
  email,
  contactPersonName,
  phone,
  address,
  styleGroup,
  numberOfBandMembers,
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
    numberOfBandMembers,
    listOfInstrumentalBend,
    linksSocialNetworkPage,
    linksToBandVideo,
  });
  return { doc };
};

module.exports = {
  addGroup,
};
