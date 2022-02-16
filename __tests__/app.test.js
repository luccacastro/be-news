const app = require('../app')
const supertest = require('supertest')

// beforeAll(done => {
//     done()
//   })

// afterAll(done => {
//     app.close();
//     done();
// });

describe('Topics endpoints', ()=>{
    test('GET /api/topics should return a json containing all topics with status 200', async ()=>{
        const apiRes = {"topics": [ { slug: 'coding', description: 'Code is love, code is life' },
        { slug: 'football', description: 'FOOTIE!' },
        { slug: 'cooking',
          description: 'Hey good looking, what you got cooking?' }]}
        
     supertest(app).get('/api/topics').expect(200)
        .then(res => {
            Array.from(res.body).forEach(item => {
                expect(item.slug).toEqual(expect.any(String))
                expect(item.description).toEqual(expect.any(String))
            })
           
                
            expect(res.body).toStrictEqual(apiRes)
            expect(res.body).toHaveLength(3)
        })
        // app.clo
    })

})