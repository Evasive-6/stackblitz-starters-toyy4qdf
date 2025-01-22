
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    student_id: String,
    name: String,
    marks: {
        math: Number,
        science: Number,
        english: Number,
        history: Number,
        geography: Number
    },
    total: Number
});

module.exports = mongoose.model('Student', studentSchema);
