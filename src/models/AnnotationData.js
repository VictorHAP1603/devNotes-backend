const moongose = require("mongoose");
const AnnotationDataSchema = new moongose.Schema({
  title: String,
  notes: String,
  priority: Boolean,
});

module.exports = moongose.model("Annotations", AnnotationDataSchema);
