
module.exports = (sequelize, Sequelize) => {
    const Comsub = sequelize.define("comsub", {
      code:{
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.INTEGER
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });

  
    return Comsub;
  };
  
