const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  platform: { type: String, required: true },
  technology: { type: String, required: true },
  developer: { type: String, required: true },
  status: { type: String, required: true },
  version: { type: String, required: true },
  releaseyear: { type: Number, required: true },
});

const memberSchema = mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  employee_image: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  platform: { type: String, required: true },
  technology: { type: String, required: true },
  employee_id: { type: Number, required: true },
  position: { type: String, required: true },
  experience: { type: String, required: true },
  joiningyear: { type: Number, required: true },
});

module.exports = mongoose.model('project', projectSchema);
module.exports = mongoose.model('member', memberSchema);
