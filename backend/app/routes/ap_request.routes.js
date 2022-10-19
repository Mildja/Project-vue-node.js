
module.exports = app => {
    const ap_requests = require("../controllers/ap_request.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", ap_requests.create);
  
    // Retrieve all 
    router.get("/", ap_requests.findAll);
  
    // Retrieve all published 
    router.get("/published", ap_requests.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", ap_requests.findOne);
  
    // Update a  with id
    router.put("/:id", ap_requests.update);
  
    // Delete a  with id
    router.delete("/:id", ap_requests.delete);
  
    // Delete all
    router.delete("/", ap_requests.deleteAll);
  
    app.use("/api/ap_requests", router);
  };
