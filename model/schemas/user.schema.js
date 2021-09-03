const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    id: {
        required: true,
        type: 'string',
    },
    name: {
        required: true,
        type: 'string',
    },
    user: {
        required: true,
        type: 'string',
    },
    password: {
        required: true,
        type: 'string',
    },
    state: {
        required: true,
        type: 'Boolean',
        default: true
    },
    id_rol: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_rol"
    }
});

module.exports = userSchema;