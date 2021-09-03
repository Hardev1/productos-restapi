const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema ({
    id: {
        required: true,
        type: 'string',
    },
    name: {
        required: true,
        type: 'string',
    }
});

module.exports = categorySchema;