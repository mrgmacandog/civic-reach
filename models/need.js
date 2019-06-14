// const Organization = require('./organization');

module.exports = function(sequelize, DataTypes) {
  var Need = sequelize.define("Need", {
    name: DataTypes.STRING
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
