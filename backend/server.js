import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import date from "silly-datetime";
import http from 'http';
import { Movie } from './model/movie.js';
import cors from 'cors'
dotenv.config();

// import bodyParser from 'body-parser';
const app = express();
app.use(cors())
app.use('/favicon.ico', express.static('🎬.svg'));
const server = http.createServer(app)

mongoose
    .connect(process.env.DBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        server.listen(process.env.PORT)
        console.log(`${date.format(new Date(), "YYYY-MM-DD HH:mm")} connected`);
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    console.log(`${date.format(new Date(), "YYYY-MM-DD HH:mm")} ${req.method} ${req.path}`);
    res.send("🎬");
});

app.get("/randomone", (req, res) => {
    console.log(`${date.format(new Date(), "YYYY-MM-DD HH:mm")} ${req.method} ${req.path}`);
    Movie.aggregate([{ $sample: { size: 1 } }])
        .then(data => {
            console.log('Random data:', data);
            // 在这里可以对获取到的数据进行处理
            res.send(data)
        })
        .catch(error => {
            console.error('Error:', error);
        })
});

app.all("*", function (req, res, next) {
    console.log(`${date.format(new Date(), "YYYY-MM-DD HH:mm")} ${req.method} ${req.path}`);
    res.send({
        code: 404,
        codeDesc: "PageNotFound",
        message: "404 page not found",
    });
});
