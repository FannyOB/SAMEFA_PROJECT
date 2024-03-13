import request from "supertest";
import app from "../app.js";
import pool from "../config/elephantsql.js"


describe("Test application",() => {
    test("Not found for site 404", async () => {
        const res = await request(app).get("/wrong-endpoint")
        expect(res.statusCode).toEqual(404)
    })
});

afterAll(async () => {
    await pool.end()
});