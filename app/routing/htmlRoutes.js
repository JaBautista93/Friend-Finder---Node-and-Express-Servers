var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {


  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
  });

  // No route is found, default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });

};
