const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    avatar: { type: String, required: true },
    bio: {type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, default: true },
    Password: { type: String, required: true },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;