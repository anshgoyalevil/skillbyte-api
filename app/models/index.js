const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.internship = require("./internship.model");
db.batch = require("./batch.model");

db.ROLES = ["USER", "ADMIN", "MODERATOR"];

module.exports = db;