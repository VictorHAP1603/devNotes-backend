const Annotations = require("../models/AnnotationData");

module.exports = {
  async updateNotes(req, res) {
    const { id } = req.params;
    const { notes } = req.body;

    const annotation = await Annotations.findOne({ _id: id });

    if (!annotation) {
      return res.status(400).json({
        error: "Não foi possível localizar o arquivo para fazer a mudança",
      });
    }

    if (!notes) {
      return res.json(annotation);
    }

    annotation.notes = notes;

    await annotation.save();
    return res.json(annotation);
  },

  //   async updateTitle(req, res) {
  //     const { id } = req.params;
  //     const { title } = req.body;

  //     const annotation = await Annotations.findOne({ _id: id });

  //     if (!annotation) {
  //       return res.status(400).json({
  //         error: "Não foi possível localizar o arquivo para fazer a mudança",
  //       });
  //     }

  //     if (!title) {
  //       return res.status(400).json({
  //         error: "É preciso passar um novo título para atualizar!",
  //       });
  //     }

  //     annotation.title = title;

  //     await annotation.save();
  //     return res.json(annotation);
  //   },
};
