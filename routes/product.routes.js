const controller = require("../controller/logic/product.controller")

exports.ProductRoutes = (app) => {
    app.get("/product", (req, res, next) => {
        controller.getAllProduct(req, res, next);
    });

    app.post("/product", (req, res, next) => {
        controller.createProduct(req, res, next);
    });

    app.get("/product/byid/:code", (req, res, next) => {
        controller.getById(req, res, next);
    });

    app.update("/product", (req, res, next) => {
        controller.updateProduct(req, res, next);
    });

    app.delete("/product", (req, res, next) => {
        controller.deleteProduct(req, res, next);
    });
}