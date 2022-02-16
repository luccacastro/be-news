const { getAllTopics } = require('../models/topics')

exports.getTopics = (req,res) => {
    return getAllTopics().then(data => res.send(data.rows))
}