const db = require('./db/connection')


exports.getTopics = (req,res) => {
    db.query(`SELECT * FROM topics`).then(resp => resp.rows)
}

// console.log(this.getTopics().then(x => x))
// console.log()