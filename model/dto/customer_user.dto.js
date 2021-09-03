const mongoose = require("mongoose");

const schema = require("../schemas/customer_user.schema");

const db = require("../db-connection/mongodb");
db();

schema.statics = {
    create: function (data, cb) {
        let doc = new this(data);
        doc.save(cb);
    },

    getAll: function (query, cb) {
        this.find(query, cb);
    },

    login: function (query,cb){
        this.find(query, cb);
    },

    getById: function (query, cb) {
        this.find(query, cb);
    },

    update: function (query, data, cb) {
        this.findOneAndUpdate(query, {$set: data}, {new: true}, cb);
    },

    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }
};

const dto = mongoose.model("coll_customer_user", schema);

module.exports = dto;