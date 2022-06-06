import express from 'express';
// import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import userRouter from "./api/routes/userRoute.js";
import forumRouter from "./api/routes/forumRoute.js";
import cors from 'cors';

const app = express();

mongoose.connect('mongodb://localhost:27017/restful_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));

// middleware
app.use(cors()); // cors agar api dapat diakses diluar domain
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(
    cookieSession({
      name: "bezkoder-session",
      secret: "COOKIE_SECRET", // should use as secret environment variable
      httpOnly: true
    })
);

app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
        if (err) req.pengguna = undefined;
        req.pengguna = decode;
        next();
      });
    } else {
      req.user = undefined;
      next();
    }
});
  
app.use(userRouter);
app.use(forumRouter);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' tidak ditemukan' })
});

app.listen('5000', ()=> console.log('Server Running at port: 5000'));