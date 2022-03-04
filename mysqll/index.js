const mysql = require('mysql')

// rata start
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// rata ends

// create a connection to the database (it does not connect yet)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
})

// define a route
app.get('/mysql', function (req, res) {

    // connect to the database
    connection.connect(function (err) {
        if (err) throw err; // handle the error if the connection fails

        // execute the query
        const query = 'select * from employee';
        connection.query(query, function (err, result) {
            if (err) throw err; // handle the error if any

            res.send(result); // send the result
            res.end(); // end the response
        })

        connection.end(); // close the connection to the database
    })
})

// listen on port 8080
app.listen(8080)