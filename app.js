const express = require('express')
const { getTopics } = require('./controllers/topics-controller')
const {invalidRouteHandler} = require('./error')
const bodyParser = require('body-parser');
// const methodOverride = require('method-override');

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser());

app.get('/api/topics', getTopics)
app.use(invalidRouteHandler)
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message
    });
  });
// app.use('/*', )

app.listen(8000, function(){
    console.log('Listening port 8000')
})

module.exports = app