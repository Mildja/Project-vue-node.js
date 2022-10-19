module.exports = app => {
    const doc_sents = require("../controllers/doc_sent.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", doc_sents.create);
  
    // Retrieve all 
    router.get("/", doc_sents.findAll);
  
    // Retrieve all published 
    router.get("/published", doc_sents.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", doc_sents.findOne);
  
    // Update a  with id
    router.put("/:id", doc_sents.update);
  
    // Delete a  with id
    router.delete("/:id", doc_sents.delete);
  
    // Delete all
    router.delete("/", doc_sents.deleteAll);
  
    app.use("/api/doc_sents", router);
  };
