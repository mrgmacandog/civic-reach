// const Organization = require('./organization');

module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    eventTitle: DataTypes.STRING,
    type: DataTypes.STRING,
    date: DataTypes.STRING,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    venueName: DataTypes.STRING,
    address: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip:DataTypes.STRING,
    description:DataTypes.STRING,
  });

  Event.associate = function(models) {
    Event.belongsTo(models.Organization, {
      foreignKey: {
        allowNull: false
      }
    });
    Event.hasMany(Organization);
    return Event;
  };
}
