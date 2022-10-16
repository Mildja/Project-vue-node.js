
const db = require("../models");
const Comsub = db.comsubs;
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
  const comsub = {
    code: req.body.code,
    name: req.body.name,
    unit: req.body.unit,
    published: req.body.published ? req.body.published : false
  };

  // Save in the database
  Comsub.create(comsub)
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
  const code = req.query.code;
  var condition = code ? { code: { [Op.iLike]: `%${code}%` } } : null;

  Comsub.findAll({ where: condition })
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

  Comsub.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Comsub with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Comsub with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Comsub.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Comsub was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Comsub with id=${id}. Maybe Comsub was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Comsub with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Comsub.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Comsub was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Comsub with id=${id}. Maybe Comsub was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Comsub with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Comsub.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Comsub were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all"
      });
    });
};

exports.findAllPublished = (req, res) => {
    Comsub.findAll({ where: { published: true } })
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

