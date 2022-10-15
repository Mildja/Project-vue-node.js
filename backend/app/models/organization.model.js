module.exports = (sequelize, Sequelize) => {
    const organization = sequelize.define("organization", {
      name: {
        type: Sequelize.STRING
      },
      addr: {
        type: Sequelize.STRING
      }
    });
  
    return organization;
  };