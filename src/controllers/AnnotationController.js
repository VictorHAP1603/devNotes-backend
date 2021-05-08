const { response } = require("express");
const Annotations = require("../models/AnnotationData");

module.exports = {
  async read(req, res) {
    // find retorna todos os registros
    const AnnotationList = await Annotations.find();

    return res.json(AnnotationList);
  },

  async create(req, res) {
    const { title, notes, priority } = req.body;

    if (!notes || !title) {
      return res
        .status(400)
        .json({ error: "É necessário um titulo e anotação" });
    }

    const AnnotationCreated = await Annotations.create({
      title,
      notes,
      priority,
    });

    return res.json(AnnotationCreated);
  },

  async delete(req, res) {
    const { id } = req.params;

    const AnnotationDelete = await Annotations.findOneAndDelete({ _id: id });

    console.log(AnnotationDelete);

    if (AnnotationDelete) {
      return res.json(AnnotationDelete);
    }

    return res
      .status(401)
      .json({ error: "Não foi encontrado o registro para deletar" });
  },
};
