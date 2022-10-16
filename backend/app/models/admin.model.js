module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
      code:{
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });

  
    return Admin;
  };