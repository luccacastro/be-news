// const db = require('./db/connection')
const { getAllTopics } = require('../models/topics')

exports.getTopics = (req,res) => {
        return getAllTopics().then(data => {
        // console.log(data.rows)
        res.send(data)
    })
}

// console.log(this.getTopics().then(x => x))
// console.log()