const controller = require("../controller/logic/customer.controller")

exports.CustomerRoutes = (app) => {
    app.get("/customer", (req, res, next) => {
        controller.getAllCustomer(req, res, next);
    });

    app.post("/customer", (req, res, next) => {
        controller.createCustomer(req, res, next);
    });

    app.get("/customer/byid/:code", (req, res, next) => {
        controller.getById(req, res, next);
    });

    app.update("/customer", (req, res, next) => {
        controller.updateCustomer(req, res, next);
    });

    app.delete("/customer", (req, res, next) => {
        controller.deleteCustomer(req, res, next);
    });
}