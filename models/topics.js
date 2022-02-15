const db = require('../db/connection')


exports.getAllTopics = (req,res) => {
    return db.query(`SELECT * FROM topics`)
    .then(resp => resp)
}