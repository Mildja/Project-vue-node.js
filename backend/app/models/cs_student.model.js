module.exports = (sequelize, Sequelize) => {
    const Cs_student= sequelize.define("cs_student", {
      grade: {
        type: Sequelize.STRING
      },
    
      published: {
        type: Sequelize.BOOLEAN
      }
      
    });

    return Cs_student;
  };