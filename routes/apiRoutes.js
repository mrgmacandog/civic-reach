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

  app.post("/api/orgs", function(req, res) {
    db.Organization.create({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      address: req.body.address,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode
    }).then(function(newRecord) {
      res.json(newRecord);
    });
  });

  app.post("/api/events", function(req, res) {
    db.Events.create({
      eventTitle: req.body.eventTitle,
      type: req.body.type,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      venueName: req.body.venueName,
      address: req.body.address,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      description: req.body.description
    }).then(function(newRecord) {
      res.json(newRecord);
    });
  });

  app.post("/api/needs", function(req, res) {
    db.Events.create({
      eventName: req.body.eventName,
      type: req.body.type,
      quantity: req.body.quantity,
      description: req.body.description
    }).then(function(newRecord) {
      res.json(newRecord);
    });
  });
};
