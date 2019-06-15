// const Need = require('./need');
// const Event = require('./event');

/*
module.exports = function(sequelize, DataTypes) {
  var Organization = sequelize.define("Organization", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING
  });

  Organization.associate = function(models) {
    Organization.hasMany(models.Need, {
      onDelete: "cascade"
    });
    Organization.hasMany(models.Event, {
      onDelete: "cascade"
    });
    return Organization;
  };
};
*/
module.exports = function(sequelize, DataTypes) {
  var Organization = sequelize.define("Organization", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING
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
