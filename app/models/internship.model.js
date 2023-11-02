const mongoose = require("mongoose");

const InternshipSchema = new mongoose.Schema({
    internships: [
        {
            title: String,
            link: String,
            company: String,
            location: String,
            stipend: String,
            duration: String,
            createdAt: {
                type: Date,
                default: Date.now
            },
            isApproved: Boolean,
        }
    ],
    batch: String,
    batchId: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Internship = mongoose.model("Internship", InternshipSchema);

module.exports = Internship;
