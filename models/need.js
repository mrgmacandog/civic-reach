const Organization = require('./organization');

module.exports = function(sequelize, DataTypes) {
    var Need = sequelize.define("Need", {
      name: DataTypes.STRING,
    });
    Need.hasMany(Organization);
    return Need;
  };