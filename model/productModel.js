const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema ({
    productTitle: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    productDesc: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Auth',
        required: true
    },
})
module.exports = mongoose.model('Product', productSchema);