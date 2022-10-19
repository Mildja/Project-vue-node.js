module.exports = app => {
    const requests = require("../controllers/request.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", requests.create);
  
    // Retrieve all 
    router.get("/", requests.findAll);
  
    // Retrieve all published 
    router.get("/published", requests.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", requests.findOne);
  
    // Update a  with id
    router.put("/:id", requests.update);
  
    // Delete a  with id
    router.delete("/:id", requests.delete);
  
    // Delete all
    router.delete("/", requests.deleteAll);
  
    app.use("/api/requests", router);
  };
  