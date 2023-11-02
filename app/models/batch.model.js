const mongoose = require("mongoose");

const BatchSchema = new mongoose.Schema({
    year: String,
    internshipsId: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Batch = mongoose.model("Batch", BatchSchema);

module.exports = Batch;
