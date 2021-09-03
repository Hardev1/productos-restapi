const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoice_productsSchema = new Schema ({
    id: {
        required: true,
        type: 'string',
    },
    id_product: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_product"
    },
    id_invoice: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_invoice"
    },
    quantity: {
        required: true,
        type: 'Number',
        min: 0
    },
    unitary_price: {
        required: true,
        type: 'Number',
    },
});

module.exports = invoice_productsSchema;