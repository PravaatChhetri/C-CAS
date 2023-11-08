const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventoryItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String, // Change the type to String for Base64 encoded image
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    threshold: {
        type: Number,
        required: true
    },
    approved_status:{
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

const InventoryItem = mongoose.model('InventoryItem', inventoryItemSchema);

module.exports = InventoryItem;
