module.exports = (sequelize, Sequelize) => {
    const Doc = sequelize.define("doc", {
      name: {
        type: Sequelize.STRING
      },
      path: {
        type: Sequelize.STRING
      },
      
      published: {
        type: Sequelize.BOOLEAN
      }
    });

  
  
    return Doc;
  };
