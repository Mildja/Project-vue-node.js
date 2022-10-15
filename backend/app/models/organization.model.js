module.exports = (sequelize, DataTypes) => {
    const Organization = sequelize.define("organization", {
      name: {
        type: DataTypes.STRING(100)
      },
      addr: {
        type: DataTypes.STRING(100)
      }
    });
  
    return Organization;
  };