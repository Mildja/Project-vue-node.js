module.exports = (sequelize, Sequelize) => {
    const Pic = sequelize.define("pic", {
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

  
  
    return Pic;
  };
