
const db = require("../models");
const Doc = db.docs;
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
  const doc = {
    name: req.body.name,
    path: req.body.path,
    published: req.body.published ? req.body.published : false
  };

  // Save in the database
  Doc.create(doc)
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
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Doc.findAll({ where: condition })
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

  Doc.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Doc with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Doc with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Doc.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Doc was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Doc with id=${id}. Maybe Doc was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Doc with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Doc.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Doc was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Doc with id=${id}. Maybe Doc was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Doc with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Doc.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Doc were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all"
      });
    });
};

exports.findAllPublished = (req, res) => {
    Doc.findAll({ where: { published: true } })
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

