const mysql = require('mysql');

const conection = mysql.createConnection({
    host: 'localhost',
    port: 3308,
    user:'root',
    password:'ixvq10A@',
    database:'agenda-petshop'
})

module.exports = conection