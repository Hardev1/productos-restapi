const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productImagesSchema = new Schema ({
    id: {
        required: true,
        type: 'string',
    },
    name: {
        required: true,
        type: 'string',
    },
    id_product: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_product"
    },
});

module.exports = productImagesSchema;