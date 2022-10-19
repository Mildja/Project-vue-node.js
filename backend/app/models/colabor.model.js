module.exports = (sequelize, Sequelize) => {
    const Colabor = sequelize.define("colabor", {
      Fname: {
        type: Sequelize.STRING
      },
      Lname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
     
      published: {
        type: Sequelize.BOOLEAN
      }
      
    });

    return Colabor;
  };