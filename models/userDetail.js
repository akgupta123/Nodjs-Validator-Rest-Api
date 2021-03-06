const mongoose = require("mongoose");
const customer = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  emailAdress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  dateofBirth: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("detail", customer);
