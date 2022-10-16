
module.exports = app => {
    const students = require("../controllers/student.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", students.create);
  
    // Retrieve all 
    router.get("/", students.findAll);
  
    // Retrieve all published 
    router.get("/published", students.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", students.findOne);
  
    // Update a  with id
    router.put("/:id", students.update);
  
    // Delete a  with id
    router.delete("/:id", students.delete);
  
    // Delete all
    router.delete("/", students.deleteAll);
  
    app.use("/api/students", router);
  };
