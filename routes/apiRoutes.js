var db = require("../models");
var opencage = require("opencage-api-client");

module.exports = function(app) {
  // Route for getting all the organization from the Organizations table
  app.get("/api/orgs", function(req, res) {
    db.Organization.findAll({}).then(function(result) {
      res.json(result);
    });
  });

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
    }).then(function(result) {
      res.json(result);
    });
  });

  // Route for modifying an organization in the Organizations table
  app.put("/api/orgs/:id", function(req, res) {
    db.Organization.update(
      {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(result) {
      res.json(result);
    });
  });

  // Route for deleting an organization in the Organizations table
  app.delete("/api/orgs/:id", function(req, res) {
    db.Organization.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // Route for getting all the events from the events table for an organization
  app.get("/api/orgs/:orgId/events", function(req, res) {
    db.Event.findAll({
      where: {
        OrganizationId: req.params.orgId
      }
    }).then(function(result) {
      res.json(result);
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
    }).then(function(result) {
      res.json(result);
    });
  });

  // Route for modifying an event in the Events table
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
          id: req.params.id
        }
      }
    ).then(function(result) {
      res.json(result);
    });
  });

  // Route for deleting an event in the Events table
  app.delete("/api/events/:id", function(req, res) {
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // Route for getting all the needs from the needs table for an organization
  app.get("/api/orgs/:orgId/needs", function(req, res) {
    db.Need.findAll({
      where: {
        OrganizationId: req.params.orgId
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // Route for adding a new need to the Needs table
  app.post("/api/needs", function(req, res) {
    db.Need.create({
      OrganizationId: req.body.orgId, // TODO check to see if needs to be parsed as an int
      needTitle: req.body.needTitle,
      type: req.body.type,
      quantity: req.body.quantity,
      description: req.body.description
    }).then(function(result) {
      res.json(result);
    });
  });

  // Route for modifying a need in the Needs table
  app.put("/api/needs/:id", function(req, res) {
    db.Need.create(
      {
        needTitle: req.body.needTitle,
        type: req.body.type,
        quantity: req.body.quantity,
        description: req.body.description
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(result) {
      res.json(result);
    });
  });

  // Route for deleting an event in the Needs table
  app.delete("/api/needs/:id", function(req, res) {
    db.Need.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // Route for retrieving location
  app.get("/get-zip/:coords", function(req, res) {
    opencage
      .geocode({ q: req.params.coords })
      .then(function(data) {
        console.log(data.results[0].components.postcode);
        var zip = data.results[0].components.postcode;
        res.redirect("/zip/" + zip);
      })
      .catch(function(error) {
        console.log("error", error.message);
      });
  });
};
