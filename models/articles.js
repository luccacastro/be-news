exports.getAllArticles = (req,res) => {
    return db.query(`SELECT * FROM articles`)
    .then(resp => resp.rows)
}