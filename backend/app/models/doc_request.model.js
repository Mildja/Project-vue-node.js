module.exports = (sequelize, Sequelize) => {
    const Doc_request = sequelize.define("doc_request", {
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

  
  
    return Doc_request;
  };
