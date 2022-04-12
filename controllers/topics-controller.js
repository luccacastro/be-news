// const db = require('./db/connection')
const { getAllTopics } = require('../models/topics')

exports.getTopics = (req,res) => {
        return getAllTopics().then(data => {
            // console.log(data)
            res.send({topics: data})
    })
}

// console.log(this.getTopics().then(x => x))
// console.log()