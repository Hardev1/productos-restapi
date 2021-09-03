const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customer_userSchema = new Schema ({
    id: {
        required: true,
        type: 'string',
    },
    username: {
        required: true,
        type: 'string',
    },
    password: {
        required: true,
        type: 'string',
    },
    id_customer: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_client"
    }
});

module.exports = customer_userSchema;