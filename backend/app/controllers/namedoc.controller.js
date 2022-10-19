
const db = require("../models");
const Namedoc = db.namedocs;
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
  const namedoc = {
    Fname: req.body.Fname,
    Lname: req.body.Lname,
    position: req.body.position,
    published: req.body.published ? req.body.published : false
  };

  // Save in the database
  Namedoc.create(namedoc)
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
  const Fname = req.query.Fname;
  var condition = Fname ? { Fname: { [Op.iLike]: `%${Fname}%` } } : null;

  Namedoc.findAll({ where: condition })
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

  Namedoc.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Namedoc with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Namedoc with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Namedoc.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Namedoc was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Namedoc with id=${id}. Maybe Namedoc was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Namedoc with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Namedoc.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Namedoc was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Namedoc with id=${id}. Maybe Namedoc was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Namedoc with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Namedoc.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Namedoc were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all"
      });
    });
};

exports.findAllPublished = (req, res) => {
    Namedoc.findAll({ where: { published: true } })
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

