
module.exports = app => {
    const admins = require("../controllers/admin.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", admins.create);
  
    // Retrieve all 
    router.get("/", admins.findAll);
  
    // Retrieve all published 
    router.get("/published", admins.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", admins.findOne);
  
    // Update a  with id
    router.put("/:id", admins.update);
  
    // Delete a  with id
    router.delete("/:id", admins.delete);
  
    // Delete all
    router.delete("/", admins.deleteAll);
  
    app.use("/api/admins", router);
  };
