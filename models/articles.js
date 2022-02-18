const db = require('../db/connection')



exports.getAllArticles = () => {
    return db.query(`SELECT * FROM articles`)
    .then(resp => resp.rows)
}

exports.getArticlesById = (id) => {
    return db.query(`SELECT * FROM articles WHERE article_id = $1`, [id])
            .then(resp => {
                if(!resp.rows.length) return Promise.reject({status: 404, message: '404 article not found  valid number but non existent article'})
                else return resp.rows[0]
            })
}