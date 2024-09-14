const express = require('express');  
const app = express();
const port = 3000;
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sibarachi :)',
    database: 'taskmanager'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Listening to the backend server 
app.get('/', (req, res) => {  
    res.send('hello world');
});

app.listen(port, () => {  
    console.log(`Server running at http://localhost:${port}`);
});

// GET request to fetch tasks
app.get('/tasks', (req, res) => {
    const sql = 'SELECT * FROM tasks';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching tasks:', err);
            res.status(500).send('Error fetching tasks');
        } else {
            res.json(results);
        }
    });
});

// POST request to add a task
app.post('/addtask', (req, res) => {
    const { task, description, deadline, affecto } = req.body;
    const sql = 'INSERT INTO tasks (task, description, deadline, affecto) VALUES (?, ?, ?, ?)';
    db.query(sql, [task, description, deadline, affecto], (err, results) => {
        if (err) {
            console.error('Error adding task:', err);
            res.status(500).send('Error adding task');
        } else {
            res.status(201).json({ id: results.insertId, ...req.body });
        }
    });
});
