const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  age: String,
  weight: String,
  allergies: String,
  gender: String,
  bloodPressure: String,
  diabetes: String,
});

const patientModel = mongoose.model("patientModel", patientSchema);
module.exports = patientModel;
