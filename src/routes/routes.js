const express = require("express");
const routes = express.Router();

const AnnotationsController = require("../controllers/AnnotationController");
const PrioritiesController = require("../controllers/PriorityController");
const ContentController = require("../controllers/ContentController");

// Rota Annotaion
routes.post("/annotations", AnnotationsController.create);
routes.get("/annotations", AnnotationsController.read);
routes.delete("/annotations/:id", AnnotationsController.delete);

// Rota Priority
routes.get("/priorities", PrioritiesController.read);
routes.post("/priorities/:id", PrioritiesController.updatePriority);

// Rota Contents ( mudar conteudo )
routes.post("/content-notes/:id", ContentController.updateNotes);
// routes.post("/content-title/:id", ContentController.updateNotes);

module.exports = routes;
