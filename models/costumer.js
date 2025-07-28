const mongoose = require('mongoose');

const costumerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
})



const COSTUMER = mongoose.model("COSTUMER", costumerSchema);
module.exports = COSTUMER;