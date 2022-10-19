
module.exports = app => {
    const announces = require("../controllers/announce.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", announces.create);
  
    // Retrieve all 
    router.get("/", announces.findAll);
  
    // Retrieve all published 
    router.get("/published", announces.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", announces.findOne);
  
    // Update a  with id
    router.put("/:id", announces.update);
  
    // Delete a  with id
    router.delete("/:id", announces.delete);
  
    // Delete all
    router.delete("/", announces.deleteAll);
  
    app.use("/api/announces", router);
  };
