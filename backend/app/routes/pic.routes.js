module.exports = app => {
    const pics = require("../controllers/pic.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", pics.create);
  
    // Retrieve all 
    router.get("/", pics.findAll);
  
    // Retrieve all published 
    router.get("/published", pics.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", pics.findOne);
  
    // Update a  with id
    router.put("/:id", pics.update);
  
    // Delete a  with id
    router.delete("/:id", pics.delete);
  
    // Delete all
    router.delete("/", pics.deleteAll);
  
    app.use("/api/pics", router);
  };
  