module.exports = (sequelize, Sequelize) => {
    const Announce = sequelize.define("announce", {
      topic: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.STRING
      },
    
      published: {
        type: Sequelize.BOOLEAN
      }
      
    });

    return Announce;
  };