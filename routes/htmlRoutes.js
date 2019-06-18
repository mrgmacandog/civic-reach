var db = require("../models");

// Export routes
module.exports = function(app) {
  // Get all events and needs everywhere
  app.get("/", function(req, res) {
    db.Event.findAll({
      include: [
        {
          model: db.Organization
        }
      ]
    }).then(function(events) {
      db.Need.findAll({
        include: [
          {
            model: db.Organization
          }
        ]
      }).then(function(needs) {
        console.log(needs);
        res.render("index", {
          events: events,
          needs: needs
        });
      });
    });
  });

  // Get events and needs from a ceratin zip
  app.get("/zip/:zip", function(req, res) {
    db.Event.findAll({
      where: {
        zip: req.params.zip
      },
      include: [
        {
          model: db.Organization
        }
      ]
    }).then(function(events) {
      db.Need.findAll({
        include: [
          {
            model: db.Organization,
            where: {
              zip: req.params.zip
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

  // Get organization login page
  app.get("/login", function(req, res) {
    db.Organization.findAll({}).then(function(orgs) {
      res.render("login", { orgs: orgs });
    });
  });

  // Get organization dashboard
  app.get("/dashboard/org/:id", function(req, res) {
    db.Event.findAll({
      where: {
        OrganizationId: req.params.id
      },
      include: [
        {
          model: db.Organization
        }
      ]
    }).then(function(events) {
      db.Need.findAll({
        where: {
          OrganizationId: req.params.id
        },
        include: [
          {
            model: db.Organization
          }
        ]
      }).then(function(needs) {
        console.log(req);
        res.render("dashboard", {
          events: events,
          needs: needs
        });
      });
    });
  });

  // Organization sign-up page
  app.get("/registration", function(req, res) {
    res.render("registration");
  });

  // Post new event page
  app.get("/postevent", function(req, res) {
    res.render("postevent");
  });

  // Post new need page
  app.get("/postneed", function(req, res) {
    res.render("postneed");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
