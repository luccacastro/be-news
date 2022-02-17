const app = require('../app')
const request = require('supertest')
const data = require('../db/data/test-data');
const seed = require('../db/seeds/seed');
const db = require('../db/connection');


beforeAll(done => { 
    seed(data).then(x => x)
    done()
})


describe('Topics endpoints', ()=>{
    test('GET /api/topics should return a json containing all topics with status 200', ()=>{    
    request(app).get('/api/topics').expect(200)
        .then(res => {
            res.body.topics.forEach(item => {
                expect(item.slug).toEqual(expect.any(String))
                expect(item.description).toEqual(expect.any(String))
            })
            expect(res.body.topics).toHaveLength(3)
        })
        // app.clo
    })

    test('GET /api/articles/:articles_id should return a response with 200 OK status', ()=>{    
        request(app).get('/api/articles/2').expect(200)
            .then(res => {
                res.body.articles.forEach(item => {
                    expect(item.article_id).toEqual(expect.any(Number))
                    expect(item.title).toEqual(expect.any(String))
                    expect(item.topic).toEqual(expect.any(String))
                    expect(item.author).toEqual(expect.any(String))
                    expect(item.body).toEqual(expect.any(String))
                    expect(item.created_at).toEqual(expect.any(String))
                })
                expect(res.body).toHaveLength(1)
            })
            
            // app.clo
        })
    
       
})