module.exports = (sequelize, Sequelize) => {
    const Ap_request = sequelize.define("ap_request", {
      approve: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
    
      published: {
        type: Sequelize.BOOLEAN
      }
      
    });

    return Ap_request;
  };