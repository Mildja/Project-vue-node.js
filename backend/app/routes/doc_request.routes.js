module.exports = app => {
    const doc_requests = require("../controllers/doc_request.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", doc_requests.create);
  
    // Retrieve all 
    router.get("/", doc_requests.findAll);
  
    // Retrieve all published 
    router.get("/published", doc_requests.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", doc_requests.findOne);
  
    // Update a  with id
    router.put("/:id", doc_requests.update);
  
    // Delete a  with id
    router.delete("/:id", doc_requests.delete);
  
    // Delete all
    router.delete("/", doc_requests.deleteAll);
  
    app.use("/api/doc_requests", router);
  };
