const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    items: {
        type: [String],
        required: true
    },
    quantity: {
        type: [Number], 
        required: true
    },
    price: {
        type: [Number],
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
