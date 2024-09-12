const express = require('express');  
const app = express();

const port = 3000;
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const { timestamp } = require('rxjs');

app.use(cors());
app.use(bodyParser.json());


// listening to the back end server 
app.get('/',(req, res) => {  
    res.send('hello world');
     });
     app.listen(port, () => {  
    });
     console.log("Serveur démarré");

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sibarachi :)',
    database: 'taskmanagerdb'
});



//error conection
db.connect((err) => {
    if (err) {
        throw err
    }
    console.log('Connected to MySQL database');
});

app.get('/api/tasks', (req, res) => {
    db.connect((err) => {
        if (err) {
            throw err
        }
        console.log('Connected to MySQL database');
    });
   const sql = 'SELECT* FROM tasks';
   db.query(sql,(err,results)=> {
    if (err){ throw err;}
    res.send(results);
   })
    console.log(results);

});


// POST request to insert data
app.post('/addtask', (req, res) => {
    
    const sql = 'INSERT INTO tasks (title, description, deadline, owner) VALUES (?, ?,?,?)';
    db.query(sql, [title, description,deadline, owner], (err, results) => {
        if (err) {
            console.error('Error adding task:', err);
            res.status(500).send('Error adding task');
        } else {
            res.status(201).send({ id: results.insertId, ...req.body });
        }
    });
});


   
  
   







