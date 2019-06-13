const Need = require('./need');
const Event = require('./event');

module.exports = function(sequelize, DataTypes) {
    var Organization = sequelize.define("Organization", {
      name: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      location: DataTypes.STRING,
    });
    Organization.hasMany(Need);
    Organization.hasMany(Event);
    return Organization;
  };