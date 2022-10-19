module.exports = app => {
    const namedocs = require("../controllers/namedoc.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", namedocs.create);
  
    // Retrieve all 
    router.get("/", namedocs.findAll);
  
    // Retrieve all published 
    router.get("/published", namedocs.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", namedocs.findOne);
  
    // Update a  with id
    router.put("/:id", namedocs.update);
  
    // Delete a  with id
    router.delete("/:id", namedocs.delete);
  
    // Delete all
    router.delete("/", namedocs.deleteAll);
  
    app.use("/api/namedocs", router);
  };
