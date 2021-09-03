const productImageDto = require ("../../model/dto/productImage.dto");

const helpers = require("../helpers/general.helpers");

exports.createProductImage = (req, res, next) => {
    let productImage = {
        id: req.body.id,
        name: req.body.name,
        id_product: product.id,
    };

    productImageDto.save(product, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        };

        res.status(201).json({
            info: data
        });
    });
};

exports.updateProductImage = (req, res, next) => {
    let productImage = {
        id: req.body.id,
        name: req.body.name,
        id_product: product.id,
    };

    productImageDto.update({ _id: req.body.id }, product, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        };

        res.status(201).json({
            info: data
        });
    });
};

exports.getAllProductImage = (req, res, next) => {
    productImageDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        };

        res.status(200).json({
            info: data
        });
    });
};

exports.getById = (req, res, next) => {
    productImageDto.getById({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        };

        res.status(200).json({
            info: data
        });
    });
};

exports.deleteProductImage = () => {
    productImageDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        };

        res.status(204).json({
        });
    });
};