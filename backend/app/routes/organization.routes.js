module.exports = app => {
    const organization = require("../controllers/organization.controller.js");
  
    var router = require("express").Router();

  
    // Create a new 
    router.post("/", organization.create);
  
    // Retrieve all 
    router.get("/", organization.findAll);
  
    // Retrieve a single  with id
    router.get("/:id", organization.findOne);
  
    // Update a  with id
    router.put("/:id", organization.update);
  
    // Delete a  with id
    router.delete("/:id", organization.delete);
  
  
    app.use("/api/organization", router);
  };