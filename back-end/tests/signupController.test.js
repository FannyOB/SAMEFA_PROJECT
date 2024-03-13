import request  from "supertest";
import app from "../app.js"
import pool from "../config/elephantsql.js"

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
})

/*test individuel qui vérifie si la création d'un nouvel utilisateur fonctionne correctement. 
Il envoie une requête POST à l'endpoint /signup avec des données utilisateur simulées, 
puis vérifie la réponse pour s'assurer que l'utilisateur a été créé avec succès.*/
describe('Signup Controller', () => {
    it('should create a new user', async () => {

        const userData = {
            user_id: 22,
            first_name: 'Test3',
            name: 'nameTest3',
            email: 't.nameTest3@gmail.com',
            password: 'Test3',
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

/** fonction Jest est exécutée après tous les tests. 
 * Elle est utilisée ici pour fermer la connexion à la base de données après l'exécution de tous les tests. sinon message d'erreur*/
afterAll(async () => {
    await pool.end()
});
