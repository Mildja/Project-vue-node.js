
const db = require("../models");
const Colabor = db.colabors;
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
  const colabor = {
    Fname: req.body.Fname,
    Lname: req.body.Lname,
    email: req.body.email,
    tel: req.body.tel,
    published: req.body.published ? req.body.published : false
  };

  // Save in the database
  Colabor.create(colabor)
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

  Colabor.findAll({ where: condition })
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

  Colabor.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Colabor with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Colabor with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Colabor.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Colabor was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Colabor with id=${id}. Maybe Colabor was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Colabor with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Colabor.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Colabor was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Colabor with id=${id}. Maybe Colabor was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Colabor with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Colabor.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Colabor were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all"
      });
    });
};

exports.findAllPublished = (req, res) => {
    Colabor.findAll({ where: { published: true } })
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

