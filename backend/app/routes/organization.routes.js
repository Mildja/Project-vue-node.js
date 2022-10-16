module.exports = app => {
    const organizations = require("../controllers/organization.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", organizations.create);
  
    // Retrieve all 
    router.get("/", organizations.findAll);
  
    // Retrieve all published 
    router.get("/published", organizations.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", organizations.findOne);
  
    // Update a  with id
    router.put("/:id", organizations.update);
  
    // Delete a  with id
    router.delete("/:id", organizations.delete);
  
    // Delete all
    router.delete("/", organizations.deleteAll);
  
    app.use("/api/organizations", router);
  };
  