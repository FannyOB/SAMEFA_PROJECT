//import { createUser } from "../routes/users/createUser.js";
import request  from "supertest";
import app from "../app.js"
import pool from "../config/elephantsql.js"

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })


describe('Signup Controller', () => {
    it('should create a new user', async () => {

        const userData = {
            user_id: 21,
            first_name: 'Test2',
            name: 'nameTest2',
            email: 't.nameTest2@gmail.com',
            password: 'Test2',
            administrator: false
        };
        
        const res = await request(app)
            .post('/signup')
            .send(userData)
            .set('Accept', 'application/json');
    
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('message', 'user ajouté avec succès!');
        expect(res.body).toHaveProperty('user_id');
    });
});

afterAll(async () => {
    await pool.end()
});
