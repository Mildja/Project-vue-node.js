module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      code:{
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });

    return Student;
  };