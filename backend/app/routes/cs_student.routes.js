module.exports = app => {
    const cs_students = require("../controllers/cs_student.controller.js");
  
    var router = require("express").Router();
  
    // Create a new 
    router.post("/", cs_students.create);
  
    // Retrieve all 
    router.get("/", cs_students.findAll);
  
    // Retrieve all published 
    router.get("/published", cs_students.findAllPublished);
  
    // Retrieve a single  with id
    router.get("/:id", cs_students.findOne);
  
    // Update a  with id
    router.put("/:id", cs_students.update);
  
    // Delete a  with id
    router.delete("/:id", cs_students.delete);
  
    // Delete all
    router.delete("/", cs_students.deleteAll);
  
    app.use("/api/cs_students", router);
  };
