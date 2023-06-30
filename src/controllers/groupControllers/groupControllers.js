const { addGroup } = require("../../services/addGroup");

const addGroupController = async (req, res) => {
  const body = req.body;

  const data = await addGroup(body);
  res.json(data);
};

module.exports = { addGroupController };
