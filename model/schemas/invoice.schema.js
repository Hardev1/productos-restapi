const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema ({
    id: {
        required: true,
        type: 'string',
    },
    consecutive: {
        required: true,
        type: 'string',
    },
    id_client: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_client"
    },
    date: {
        required: true,
        type: 'date',
    },
    hour: {
        required: true,
        type: 'Number',
    },
});

module.exports = invoiceSchema;