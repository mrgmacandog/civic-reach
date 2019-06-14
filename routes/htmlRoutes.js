var db = require("../models");

module.exports = function(app) {
  /* Example HTML routes
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        // msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/dashboard", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("dashboard", {
        // msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/registration", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("registration", {
        // msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/postneed", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("postneed", {
        // msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/postevent", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("postevent", {
        // msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
  */

  // Get all events and needs everywhere
  app.get("/", function(req, res) {
    db.Event.findall({}).then(function(events) {
      db.Need.findall({}).then(function(needs) {
        res.render("index", {
          events: events,
          needs: needs
        });
      });
    });
  });

  // Get events and needs from a ceratin zipcode
  app.get("/zipcode/:zipcode", function(req, res) {
    db.Event.findall({
      where: {
        zip: req.params.zip
      }
    }).then(function(events) {
      db.Need.findall({
        where: {
          zip: req.params.zip
        }
      }).then(function(needs) {
        res.render("index", {
          events: events,
          needs: needs
        });
      });
    });
  });

  // Event/need sign-up page
  app.get("/dashboard", function(req, res) {
    res.render("dashboard");
  });

  // Organization sign-up page
  app.get("/registration", function(req, res) {
    res.render("registration");
  });
};
