var db = require("../models");

module.exports = function(app) {
  /* Example API routes
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  */

  app.post("/api/orgs/new", function(req, res) {
    db.Organization.create({
      name: req.body.name,
      phonenumber: req.body.phonenumber,
      location: req.body.location
    }).then(function(newRecord) {
      res.json(newRecord);
    });
  });

  app.post("/api/events/new", function(req, res) {
    db.Events.create({
      name: req.body.name,
      datetime: req.body.datetime,
      address: req.body.address
    }).then(function(newRecord) {
      res.json(newRecord);
    });
  });

  app.post("/api/needs/new", function(req, res) {
    db.Events.create({
      name: req.body.name
    }).then(function(newRecord) {
      res.json(newRecord);
    });
  });
};
