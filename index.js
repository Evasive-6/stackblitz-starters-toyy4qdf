
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./model/Student');

const app = express();
app.use(bodyParser.json());
const port = 8989
mongoose.connect("mongodb+srv://albinshiju285:pov2tBzbVG3yoNA8@cluster0.j5cuo.mongodb.net/student_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/stud', async (req, res) => {
    const { threshold } = req.body;

    if (typeof threshold !== 'number') {
        return res.status(400).json({ error: 'Invalid threshold value' });
    }

    try {
        const students = await Student.find({ total: { $gt: threshold } });
        const response = {
            count: students.length,
            students: students.map(student => ({
                name: student.name,
                total: student.total
            }))
        };
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log('Server is running on port 8989');
});
