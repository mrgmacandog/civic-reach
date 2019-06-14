var db = require("../models");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       // msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // TODO change db
  // app.get("/dashboard", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("dashboard", {
  //       // msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // TODO change db
  app.get("/registration", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("registration", {
        // msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // TODO change db
  app.get("/postneed", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    res.render("postneed", null);
    // });
  });

  // TODO change db
  app.get("/postevent", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    res.render("postevent", null);
    // });
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Get all events and needs everywhere
  app.get("/", function(req, res) {
    db.Event.findAll({}).then(function(events) {
      var phrase1 = "hello, world";
      db.Need.findAll({}).then(function(needs) {
        console.log(phrase1);
        res.render("index", {
          events: events,
          needs: needs
        });
      });
    });
  });

  // Get events and needs from a ceratin zipcode
  app.get("/zipcode/:zipcode", function(req, res) {
    db.Event.findAll({
      where: {
        zip: req.params.zip
      }
    }).then(function(events) {
      db.Need.findAll({
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
    res.render("registration", null);
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
