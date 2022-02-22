/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { model, Schema } = require("mongoose");

const ItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const Item = model("User", ItemSchema, "users");

module.exports = Item;
