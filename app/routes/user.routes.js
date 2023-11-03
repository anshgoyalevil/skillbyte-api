const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/getUserStats", [authJwt.verifyToken], controller.getUserStats);

  app.post("/api/updateProfile", [authJwt.verifyToken], controller.updateProfile);

  app.post("/api/changePassword", [authJwt.verifyToken], controller.changePassword);

};


