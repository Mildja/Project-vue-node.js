
const db = require("../models");
const Announce = db.announces;
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
  const announce = {
    title: req.body.title,
    detail: req.body.detail,

    published: req.body.published ? req.body.published : false
  };

  // Save in the database
  Announcen.create(announce)
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
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Announce.findAll({ where: condition })
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

  Announce.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Announce with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Announce with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Announce.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Announce was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Announce with id=${id}. Maybe Announce was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Announce with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Announce.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Announce was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Announce with id=${id}. Maybe Announce was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Announce with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Announce.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Announce were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all"
      });
    });
};

exports.findAllPublished = (req, res) => {
    Announce.findAll({ where: { published: true } })
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

