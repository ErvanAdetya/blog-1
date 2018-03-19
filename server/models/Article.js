'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

module.exports = mongoose.model('Article', schema({
    title: String,
    description: String,
    author: String
})
)