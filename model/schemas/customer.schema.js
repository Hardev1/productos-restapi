const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const customerSchema = new Schema ({
    id: {
        required: true,
        type: 'string',
    },
    name: {
        required: true,
        type: 'string',
    },
    document: {
        required: true,
        type: 'string',
        unique: true
    },
    address: {
        required: true,
        type: 'string',
    },
    email: {
        required: true,
        type: 'string',
    },
    phone: {
        required: true,
        type: 'string',
    },
    state: {
        required: true,
        type: 'Boolean',
        default: true
    },
});

customerSchema.plugin(validator);
module.exports = customerSchema;