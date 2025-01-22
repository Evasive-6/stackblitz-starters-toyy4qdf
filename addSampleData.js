
const mongoose = require('mongoose');
const Student = require('./model/Student');

mongoose.connect("mongodb+srv://albinshiju285:pov2tBzbVG3yoNA8@cluster0.j5cuo.mongodb.net/student_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const students = [
    {
        student_id: '1',
        name: 'Alice Johnson',
        marks: {
            math: 85,
            science: 90,
            english: 78,
            history: 88,
            geography: 92
        },
        total: 433
    },
];

Student.insertMany(students)
    .then(() => {
        console.log('Sample data added');
        mongoose.connection.close();
    })
    .catch(error => {
        console.error('Error adding sample data:', error);
        mongoose.connection.close();
    });
