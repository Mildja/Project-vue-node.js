
const db = require("../models");
const Grade = db.grades;
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
  const grade = {
    output: req.body.output,

    published: req.body.published ? req.body.published : false
  };

  // Save in the database
  Grade.create(grade)
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
  const output = req.query.output;
  var condition = output ? { output: { [Op.iLike]: `%${output}%` } } : null;

  Grade.findAll({ where: condition })
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

  Grade.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Grade with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Grade with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Grade.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Grade was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Grade with id=${id}. Maybe Grade was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Grade with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Grade.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Grade was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Grade with id=${id}. Maybe Grade was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Grade with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Grade.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Grade were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all"
      });
    });
};

exports.findAllPublished = (req, res) => {
    Grade.findAll({ where: { published: true } })
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

