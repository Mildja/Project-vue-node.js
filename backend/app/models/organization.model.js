module.exports = (sequelize, DataTypes) => {
    const Organization = sequelize.define("organization", {
      o_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      o_name: {
        type: DataTypes.STRING
      },
      o_addr: {
        type: DataTypes.STRING
      }
    });
  
    return Organization;
  };