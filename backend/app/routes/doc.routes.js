module.exports = app => {
    const docs = require("../controllers/doc.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", docs.create);
  
    // Retrieve all 
    router.get("/", docs.findAll);
  
    // Retrieve all published 
    router.get("/published", docs.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", docs.findOne);
  
    // Update a  with id
    router.put("/:id", docs.update);
  
    // Delete a  with id
    router.delete("/:id", docs.delete);
  
    // Delete all
    router.delete("/", docs.deleteAll);
  
    app.use("/api/docs", router);
  };
