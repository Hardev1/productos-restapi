const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    id: {
        required: true,
        type: 'string',
    },
    name: {
        required: true,
        type: 'string',
    },
    price: {
        required: true,
        type: 'Number',
    },
    existences: {
        required: true,
        type: 'string',
    },
    rate: {
        required: true,
        type: 'Number',
        min: 0,
        max: 5,
    },
    id_category: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_category"
    },
    id_brand: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_brand"
    },
    discount: {
        required: true,
        type: 'Number',
    },
});

module.exports = productSchema;