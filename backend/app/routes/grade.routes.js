module.exports = app => {
    const grades = require("../controllers/grade.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", grades.create);
  
    // Retrieve all 
    router.get("/", grades.findAll);
  
    // Retrieve all published 
    router.get("/published", grades.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", grades.findOne);
  
    // Update a  with id
    router.put("/:id", grades.update);
  
    // Delete a  with id
    router.delete("/:id", grades.delete);
  
    // Delete all
    router.delete("/", grades.deleteAll);
  
    app.use("/api/grades", router);
  };
