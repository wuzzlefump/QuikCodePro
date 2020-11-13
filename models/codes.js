
  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const codeSchema = new Schema({
  title: { type: String, required: true },
  userId: { type: Number, required: true },
  public: {type: Boolean, default: true},
  codeType: { type: String, required: true },
  snip: { type: String, required: true},
  keywords: {type: String, required: true}
});

const Codes = mongoose.model("Codes", codeSchema);

module.exports = Code;
