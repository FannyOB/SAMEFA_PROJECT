import express from "express";
import session from "express-session";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const sessionMiddleware = session({
    secret: process.env.COOKIE_SECRET,
    //credentials: true,
    name: "sid", //sid= pour session id
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.ENVIRONEMENT === "production",
        maxAge: 60000 * 60,
        sameSite: 'lax'
    }
});

app.use(sessionMiddleware);

export default sessionMiddleware;