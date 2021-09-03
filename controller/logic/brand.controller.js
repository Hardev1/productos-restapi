const brandDto = require ("../../model/dto/brands.dto");

const helpers = require("../../controller/helpers/general.helpers");

exports.createBrand = (req, res, next) => {
    let brand = {
        id: req.body.id,
        name: req.body.name,
    };

    brandDto.save(product, (err, data) => {
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

exports.updateBrand = (req, res, next) => {
    let brand = {
        id: req.body.id,
        name: req.body.name,
    };

    brandDto.update({ _id: req.body.id }, product, (err, data) => {
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

exports.getAllBrand = (req, res, next) => {
    brandDto.getAll({}, (err, data) => {
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
    brandDto.getById({ _id: req.body.id }, (err, data) => {
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

exports.deleteBrand = () => {
    brandDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        };

        res.status(204).json({
        });
    });
};