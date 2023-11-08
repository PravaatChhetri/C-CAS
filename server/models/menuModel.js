const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
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
    category: {
        type: String,
        required: true
    },
    veg_status: {
        type: Boolean,
        required: true
    },
    specials_status: {
        type: Boolean,
        required: true
    },
    approved_status:{
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
