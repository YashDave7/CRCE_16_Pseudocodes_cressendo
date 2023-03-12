const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  select: String,
  upr: String,
  name: String,
  username: String,
  email: String,
  password: String,
  hospital: String,
});

const doctorModel = mongoose.model("doctorModel", doctorSchema);
module.exports = doctorModel;
