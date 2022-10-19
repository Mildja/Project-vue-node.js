
const db = require("../models");
const Ap_request = db.ap_requests;
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
  const ap_request = {
    approve: req.body.approve,
    note: req.body.note,
    
    published: req.body.published ? req.body.published : false
  };

  // Save in the database
  Ap_request.create(ap_request)
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
  const approve = req.query.approve;
  var condition = approve ? { approve: { [Op.iLike]: `%${approve}%` } } : null;

  Ap_request.findAll({ where: condition })
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

  Ap_request.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Ap_request with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Ap_request with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Ap_request.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ap_request was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Ap_request with id=${id}. Maybe Ap_request was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Ap_request with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Ap_request.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Ap_request was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Ap_request with id=${id}. Maybe Ap_request was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Ap_request with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Ap_request.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Ap_request were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all"
      });
    });
};

exports.findAllPublished = (req, res) => {
    Ap_request.findAll({ where: { published: true } })
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

