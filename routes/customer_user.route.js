const controller = require("../controller/logic/customer_user.controller")

exports.CustomerUserRoutes = (app) => {
    app.get("/customer", (req, res, next) => {
        controller.getAllCustomer(req, res, next);
    });

    app.post("/customer", (req, res, next) => {
        controller.login(req, res, next);
    });
};