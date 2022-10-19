module.exports = (sequelize, Sequelize) => {
    const Doc_sent = sequelize.define("doc_sent", {
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

  
  
    return Doc_sent;
  };
