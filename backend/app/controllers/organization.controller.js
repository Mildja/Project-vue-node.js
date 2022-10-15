const db = require("../models");
const organization = db.organization;
const Op = db.Sequelize.Op;


// Retrieve all organization from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    organization.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  
};

// Find a single organization with an id
exports.findOne = (req, res) => {
    const id = req.params.o_id;

    Tutorial.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};

// Update a organization by the id in the request
exports.update = (req, res) => {
    const id = req.params.o_id;

    Tutorial.update(req.body, {
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
    const id = req.params.o_id;

    Tutorial.destroy({
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

