import mysql from 'mysql2'

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'muse'
})

export default DB