
module.exports = app => {
    const comsubs = require("../controllers/comsub.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", comsubs.create);
  
    // Retrieve all 
    router.get("/", comsubs.findAll);
  
    // Retrieve all published 
    router.get("/published", comsubs.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", comsubs.findOne);
  
    // Update a  with id
    router.put("/:id", comsubs.update);
  
    // Delete a  with id
    router.delete("/:id", comsubs.delete);
  
    // Delete all
    router.delete("/", comsubs.deleteAll);
  
    app.use("/api/comsubs", router);
  };
