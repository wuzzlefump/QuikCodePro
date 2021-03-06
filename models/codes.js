const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codeSchema = new Schema({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  public: { type: Boolean, default: true },
  scriptType: { type: String, required: true },
  snip: { type: String, required: true },
  scriptTypeTwo: { type: String, required: false },
  snipTwo: { type: String, required: false },
  scriptTypeThree: { type: String, required: false },
  snipThree: { type: String, required: false },
  keywords: { type: String, required: true },
  updated: { type: Date, default: Date.now },
  comments: { type: String, required: false },
  avatar: { type: String, required: false},
  author: {type: String, required:false},
  votes:[{type: Object, ref: "Codes", default:{vote:"placeholder",userId:"placeholder"}, required:false}]
});

const Codes = mongoose.model('Codes', codeSchema);

module.exports = Codes;
