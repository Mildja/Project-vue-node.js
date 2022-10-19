module.exports = app => {
    const doc_presents = require("../controllers/doc_present.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", doc_presents.create);
  
    // Retrieve all 
    router.get("/", doc_presents.findAll);
  
    // Retrieve all published 
    router.get("/published", doc_presents.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", doc_presents.findOne);
  
    // Update a  with id
    router.put("/:id", doc_presents.update);
  
    // Delete a  with id
    router.delete("/:id", doc_presents.delete);
  
    // Delete all
    router.delete("/", doc_presents.deleteAll);
  
    app.use("/api/doc_presents", router);
  };
