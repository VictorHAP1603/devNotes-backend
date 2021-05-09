const Annotations = require("../models/AnnotationData");

module.exports = {
  async read(req, res) {
    const priority = req.query;

    const prioritiesNotes = await Annotations.find(priority);

    return res.json(prioritiesNotes);
  },

  async updatePriority(req, res) {
    const { id } = req.params;

    const annotation = await Annotations.findOne({ _id: id });

    if (annotation.priority) {
      annotation.priority = false;
    } else {
      annotation.priority = true;
    }

    await annotation.save();

    return res.json(annotation);
  },
};
