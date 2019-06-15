var db = require("../models");

module.exports = function(app) {
  // Get all events and needs everywhere
  app.get("/", function(req, res) {
    db.Event.findAll({}).then(function(events) {
      db.Need.findAll({}).then(function(needs) {
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
        zipcode: req.params.zipcode
      }
    }).then(function(events) {
      db.Need.findAll({
        include: [
          {
            model: db.Organization,
            where: {
              zipcode: req.params.zipcode
            }
          }
        ]
      }).then(function(needs) {
        res.render("index", {
          events: events,
          needs: needs
        });
      });
    });
  });

  // Event/need sign-up page
  // TODO decide whether this page or event/need pages has org dropdown
  // TODO query db for org names to be displayed in the dropdown
  app.get("/dashboard", function(req, res) {
    res.render("dashboard");
  });

  // Organization sign-up page
  app.get("/registration", function(req, res) {
    res.render("registration");
  });

  // Post new event page
  // TODO query db for org names to be displayed in the dropdown
  app.get("/postevent", function(req, res) {
    res.render("postevent");
  });

  // Post new need page
  // TODO query db for org names to be displayed in the dropdown
  app.get("/postneed", function(req, res) {
    res.render("postneed");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
