// const Need = require('./need');
// const Event = require('./event');

module.exports = function(sequelize, DataTypes) {
  var Organization = sequelize.define("Organization", {
    name: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    location: DataTypes.STRING
  });

  Organization.associate = function(models) {
    Organization.hasMany(models.Need, {
      onDelete: "cascade"
    });
    Organization.hasMany(models.Event, {
      onDelete: "cascade"
    });
  };

  return Organization;
};
