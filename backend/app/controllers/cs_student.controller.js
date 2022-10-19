
const db = require("../models");
const Cs_student = db.cs_students;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const cs_student = {
    grade: req.body.grade,
   
    published: req.body.published ? req.body.published : false
  };

  // Save in the database
  Cs_student.create(cs_student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating ."
      });
    });
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
  const grade = req.query.grade;
  var condition = grade ? { grade: { [Op.iLike]: `%${grade}%` } } : null;

  Cs_student.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Cs_student.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Cs_student with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Cs_student with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Cs_student.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cs_student was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Cs_student with id=${id}. Maybe Cs_student was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Cs_student with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Cs_student.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cs_student was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Cs_student with id=${id}. Maybe Cs_student was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Cs_student with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Cs_student.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Cs_student were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all"
      });
    });
};

exports.findAllPublished = (req, res) => {
    Cs_student.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving"
        });
      });
  };

