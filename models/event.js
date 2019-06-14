// const Organization = require('./organization');

module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    name: DataTypes.STRING,
    datetime: DataTypes.DATE,
    address: DataTypes.STRING
  });

  Event.associate = function(models) {
    Event.belongsTo(models.Organization, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Event;
};
