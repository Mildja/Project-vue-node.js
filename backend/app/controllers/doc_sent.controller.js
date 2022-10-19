
const db = require("../models");
const Doc_sent = db.doc_sents;
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
  const doc_sent = {
    name: req.body.name,
    path: req.body.path,
    published: req.body.published ? req.body.published : false
  };

  // Save in the database
  Doc_sent.create(doc_sent)
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

  Doc_sent.findAll({ where: condition })
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

  Doc_sent.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Doc_sent with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Doc_sent with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Doc_sent.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Doc_sent was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Doc_sent with id=${id}. Maybe Doc_sent was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Doc_sent with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Doc_sent.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Doc_sent was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Doc_sent with id=${id}. Maybe Doc_sent was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Doc_sent with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
    Doc_sent.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Doc_sent were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all"
      });
    });
};

exports.findAllPublished = (req, res) => {
    Doc_sent.findAll({ where: { published: true } })
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

