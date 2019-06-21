module.exports = function(sequelize, DataTypes) {
  var Need = sequelize.define("Need", {
    needTitle: DataTypes.STRING,
    type: DataTypes.STRING,
    quantity: DataTypes.STRING,
    description: DataTypes.STRING
  });

  Need.associate = function(models) {
    Need.belongsTo(models.Organization, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Need;
};
