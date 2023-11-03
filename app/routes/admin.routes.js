const { authJwt } = require("../middlewares");
const controller = require("../controllers/admin.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/addInternship", [authJwt.verifyToken, authJwt.isAdmin],
        controller.addInternship);

    app.get("/api/getAllBatches", [authJwt.verifyToken, authJwt.isAdmin],
        controller.getAllBatches);

    app.get("/api/getAllUsers", [authJwt.verifyToken, authJwt.isAdmin],
        controller.getAllUsers);

    app.post("/api/changeUserRole", [authJwt.verifyToken, authJwt.isAdmin],
        controller.changeUserRole);

    app.post("/api/addNewUser", [authJwt.verifyToken, authJwt.isAdmin],
        controller.addNewUser);

    app.post("/api/deleteUser", [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteUser);

    app.post("/api/addNewBatch", [authJwt.verifyToken, authJwt.isAdmin],
        controller.addNewBatch);

};
