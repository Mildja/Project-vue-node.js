const db = require("../models");
const Organization = db.organizations;
const Op = db.Sequelize.Op;

// Create and Save a new organization
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

  // Create a organization
  const organization = {
  name: req.body.name,
  addr: req.body.addr
  };

// Save Tutorial in the database
  Organization.create(organization)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the organization."
    });
  });

};

// Retrieve all organization from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    Organization.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving organization."
      });
    });
  
};

// Find a single organization with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Organization.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find organization with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving organization with id=" + id
        });
      });
};

// Update a organization by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Organization.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "organization was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update organization with id=${id}. Maybe organization was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating organization with id=" + id
        });
      });
};

// Delete a organization with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Organization.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "organization was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete organization with id=${id}. Maybe organization was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete organization with id=" + id
        });
      });
};

