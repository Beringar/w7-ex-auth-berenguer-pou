const Item = require("../../database/models/Item");

const getAllUserItems = async (req, res, next) => {
  const { userId } = req;
  try {
    const items = await Item.find({ user: userId });
    res.json({ items });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUserItems,
};
