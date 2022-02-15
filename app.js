const express = require('express')
const { getTopics } = require('./controller')
const app = express()

app.use(express.json())

app.get('/api/topics', getTopics)

app.listen(8000, function(){
    console.log('Listening port 8000')
})
