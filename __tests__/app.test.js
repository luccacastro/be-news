const app = require('../app')
const supertest = require('supertest')

describe('Topics endpoints', ()=>{
    test('GET /api/topics should return a json containing all topics with status 200', async ()=>{
        let apiRes = [ { slug: 'coding', description: 'Code is love, code is life' },
        { slug: 'football', description: 'FOOTIE!' },
        { slug: 'cooking',
          description: 'Hey good looking, what you got cooking?' }]
        
        await supertest(app).get('/api/topics')
                .expect(200)
                .then(res => {
                    expect(res.body).toStrictEqual(apiRes)
                })
    })
})