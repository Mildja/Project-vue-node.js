module.exports = (sequelize, Sequelize) => {
    const Grade = sequelize.define("grade", {
      output: {
        type: Sequelize.STRING
      },
      
      published: {
        type: Sequelize.BOOLEAN
      }
      
    });

    return Grade;
  };