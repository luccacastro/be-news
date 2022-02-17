const db = require('../db/connection')



exports.getAllArticles = () => {
    return db.query(`SELECT * FROM articles`)
    .then(resp => resp.rows)
}

exports.getArticlesById = (id) => {
    return db.query(`SELECT * FROM articles WHERE article_id = $1`, [id]).then(resp => resp.rows)
}