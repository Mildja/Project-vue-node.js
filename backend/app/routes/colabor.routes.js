module.exports = app => {
    const colabors = require("../controllers/colabor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", colabors.create);
  
    // Retrieve all 
    router.get("/", colabors.findAll);
  
    // Retrieve all published 
    router.get("/published", colabors.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", colabors.findOne);
  
    // Update a  with id
    router.put("/:id", colabors.update);
  
    // Delete a  with id
    router.delete("/:id", colabors.delete);
  
    // Delete all
    router.delete("/", colabors.deleteAll);
  
    app.use("/api/colabors", router);
  };
