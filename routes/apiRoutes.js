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

  // Route for adding a new organization to the Organizations table
  app.post("/api/orgs", function(req, res) {
    db.Organization.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    }).then(function(newRecord) {
      res.json(newRecord);
    });
  });

  // Route for adding a new event to the Events table
  app.post("/api/events", function(req, res) {
    db.Event.create({
      OrganizationId: req.body.orgId, // TODO check to see if needs to be parsed as an int
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
      zip: req.body.zip,
      description: req.body.description
    }).then(function(newRecord) {
      res.json(newRecord);
    });
  });

  // Route for modifying an event to the Events table
  app.put("/api/events/:id", function(req, res) {
    db.Event.update(
      {
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
        zip: req.body.zip,
        description: req.body.description
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(newRecord) {
      res.json(newRecord);
    });
  });

  // Route for deleting an event
  app.delete("/api/events/:id", function(req, res) {
    db.Event.destory({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // Route for adding a new need to the Needs table
  app.post("/api/needs", function(req, res) {
    db.Need.create({
      OrganizationId: req.body.orgId, // TODO check to see if needs to be parsed as an int
      needTitle: req.body.eventName,
      type: req.body.type,
      quantity: req.body.quantity,
      description: req.body.description
    }).then(function(newRecord) {
      res.json(newRecord);
    });
  });

  // Route for adding a new need to the Needs table
  app.put("/api/needs/:id", function(req, res) {
    db.Need.create(
      {
        needTitle: req.body.eventName,
        type: req.body.type,
        quantity: req.body.quantity,
        description: req.body.description
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(newRecord) {
      res.json(newRecord);
    });
  });

  // Route for deleting an event
  app.delete("/api/needs/:id", function(req, res) {
    db.Need.destory({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};
