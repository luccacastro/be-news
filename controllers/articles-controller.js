const { getArticlesById } = require('../models/articles')

exports.findArticlesById = (req,res, next) => {
    const {article_id} = req.params
    if(!/[1-9]/.test(article_id)){
       return res.status(400).send({message: "400 - bad request article_id is not a number"})
    }
    return getArticlesById(article_id).then(data => {
        res.send(data)
    }).catch(err => {
        next(err)
    })
}
