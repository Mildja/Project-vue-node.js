module.exports = (sequelize, Sequelize) => {
    const Namedoc = sequelize.define("namedoc", {
      Fname: {
        type: Sequelize.STRING
      },
      Lname: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
      
    });

    return Namedoc;
  };