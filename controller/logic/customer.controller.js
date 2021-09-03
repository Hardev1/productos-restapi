const customerDto = require("../../model/dto/customer.dto");
const customerUserDto = require("../../model/dto/customer_user.dto");

const helpers = require("../../controller/helpers/general.helpers");
const notHelper = require("../../controller/helpers/notification.helpers");

exports.createCustomer = (req, res, next) => {
    let customer = {
        id: req.body.id,
        name: req.body.name,
        document: req.body.document,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        state: req.body.state
    };

    customerDto.create(customer, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        };

        res.status(201).json({
            info: data
        });

        let customerUser = {
            id: req.body.id,
            username: req.body.username,
            password: helpers.EncryptPassword(req.body.password),
            id_customer: customer.id,
        };

        customerUserDto.create(customer, (err, u) => {
            if (err) {
                customerUserDto.delete({ _id: data._id }, (e, data) => {
                    return res.status(400).json({
                        error: err
                    });
                });

            };

            notHelper.sendSMS(customer.phone);

            res.status(201).json({
                info: data
            });
        })
    });
};

exports.updateCustomer = (req, res, next) => {
    let customer = {
        id: req.body.id,
        name: req.body.name,
        document: req.body.document,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        state: req.body.state
    };

    customerDto.update({ _id: req.body.id }, customer, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        };

        if (rea.body.olddocument) {
            let customerUser = {
                id: req.body.id,
                username: req.body.username,
                password: helpers.EncryptPassword(req.body.password),
                id_customer: customer.id,
            };
            customerUser.update({ username: req.body.olddocument }, customerUser, (err, u) => {
                if (err) {
                    return res.status(400).json({
                        error: err
                    });
                };
            });
            notHelper.sendSMS(customer.phone);
        }

        res.status(201).json({
            info: data
        });
    });
};

exports.getAllCustomer = (req, res, next) => {
    customerDto.getAll({}, (err, data) => {
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
    customerDto.getById({ _id: req.body.id }, (err, data) => {
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

exports.deleteCustomer = () => {
    customerDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        };

        res.status(204).json({
        });
    });
};