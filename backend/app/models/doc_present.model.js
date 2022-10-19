module.exports = (sequelize, Sequelize) => {
    const Doc_present = sequelize.define("doc_present", {
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

  
  
    return Doc_present;
  };
