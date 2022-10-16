module.exports = app => {
    const organizations = require("../controllers/organization.controller.js");
  
    var router = require("express").Router();

  
    // Create a new 
    router.post("/", organizations.create);
  
    // Retrieve all 
    router.get("/", organizations.findAll);
  
    // Retrieve a single  with id
    router.get("/:id", organizations.findOne);
  
    // Update a  with id
    router.put("/:id", organizations.update);
  
    // Delete a  with id
    router.delete("/:id", organizations.delete);
  
  
    app.use("/api/organizations", router);
  };