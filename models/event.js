const Organization = require('./organization');

module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      name: DataTypes.STRING,
      datetime: DataTypes.DATE,
      address: DataTypes.STRING,
    });
    Event.hasMany(Organization);
    return Event;
  };