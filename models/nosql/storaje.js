const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete")
const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
module.exports = mongoose.model("storages", StorageScheme)