const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const codeSchema = new Schema({
    avatar: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, default: true },
    Password: { type: String, required: true },
});

const Users = mongoose.model("Users", codeSchema);

module.exports = Users;
