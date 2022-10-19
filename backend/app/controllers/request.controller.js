
const db = require("../models");
const Request = db.requests;
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
  const request = {
    type: req.body.type,
    position: req.body.position,
    startdate: req.body.startdate,
    finishdate: req.body.finishdate,
    cost: req.body.cost,
    room: req.body.room,
    status: req.body.status,
    published: req.body.published ? req.body.published : false
  };

  // Save in the database
  Request.create(request)
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
  const type = req.query.type;
  var condition = type ? { type: { [Op.iLike]: `%${type}%` } } : null;

  Request.findAll({ where: condition })
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

  Request.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Request with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Request with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Request.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Request was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Request with id=${id}. Maybe Request was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Request with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Request.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Request was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Request with id=${id}. Maybe Request was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Request with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Request.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Request were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all"
      });
    });
};

exports.findAllPublished = (req, res) => {
    Request.findAll({ where: { published: true } })
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

