module.exports = (sequelize, Sequelize) => {
    const Request = sequelize.define("request", {
      type: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      startdate: {
        type: Sequelize.DATE
      },
      finishdate: {
        type: Sequelize.DATE
      },
      cost: {
        type: Sequelize.STRING
      },
      room: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
    
      published: {
        type: Sequelize.BOOLEAN
      }
      
    });

    return Request;
  };