module.exports = (sequelize, Sequelize) => {
    const Organization = sequelize.define("organization", {
      name: {
        type: Sequelize.STRING
      },
      addr: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });

  
  
    return Organization;
  };
