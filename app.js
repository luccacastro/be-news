const express = require('express')
const { getTopics } = require('./controllers/topics-controller')
const { findArticlesById } = require('./controllers/articles-controller')
// const getUsers = require('./controllers/users-controller')
const {invalidRouteHandler, getServerErrorHandler} = require('./error')

const app = express()

app.use(express.json())

app.get('/api/topics', getTopics)
app.get('/api/articles/:article_id', findArticlesById)
// app.get('/api/users', getUsers)
// app.get('/api/articles', getArticles)

app.get('/*', invalidRouteHandler)
app.use(getServerErrorHandler);
// app.use('/*', )


module.exports = app