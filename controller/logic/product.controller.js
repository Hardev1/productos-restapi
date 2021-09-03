const productDto = require ("../../model/dto/product.dto");

const helpers = require("../../controller/helpers/general.helpers");

exports.createProduct = (req, res, next) => {
    let product = {
        id: req.body.id,
        name: req.body.name,
        document: req.body.document,
        existence: req.body.existence,
        rate: req.body.rate,
        id_category: category.id,
        id_brand: brand.id,
        discount: req.body.discount
    };

    productDto.save(product, (err, data) => {
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

exports.updateProduct = (req, res, next) => {
    let product = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        existence: req.body.existence,
        rate: req.body.rate,
        id_category: category.id,
        id_brand: brand.id,
        discount: req.body.discount
    };

    productDto.update({ _id: req.body.id }, product, (err, data) => {
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

exports.getAllProduct = (req, res, next) => {
    productDto.getAll({}, (err, data) => {
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
    productDto.getById({ _id: req.body.id }, (err, data) => {
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

exports.deleteProduct = () => {
    productDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        };

        res.status(204).json({
        });
    });
};