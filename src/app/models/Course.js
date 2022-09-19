const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
  name: { type: String, minlength: 1 },
  description: { type: String, maxlength: 255 },
  image: { type: String, maxlength: 255 },
  videoId: { type: String },
  level: { type: String },
  slug: { type: String, slug: "name", unique: true },
}, {
  timestamps: true,
});


Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
mongoose.plugin(slug);

module.exports = mongoose.model("Course", Course);
