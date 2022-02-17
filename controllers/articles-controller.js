const e = require('express')
const { getArticlesById } = require('../models/articles')

exports.findArticlesById = (req,res, next) => {
    const {article_id} = req.params
    if(!/[1-9]/.test(article_id)){
       return res.status(400).send({message: "400 - bad request /article/not-a-number"})
    }
    return getArticlesById(article_id).then(data => {
        if(!data.length){
            res.status(404).send({ message: '404 article not found  valid number but non existent article'})
        }else{
            res.send({articles: data})
        }
        
    })
}
