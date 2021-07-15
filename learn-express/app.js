import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';
import userRouter from './routes/user.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));

// app.use((req, res, next) => {
//     console.log('모든 요청에 다 실행됩니다.');
//     next();
// });

// app.get('/', (req, res, next) => {
//     //res.sendFile(path.join(__dirname, '/index.html'));
//     console.log('/ GET 요청시에만 실행됩니다.');
//     next();
// }, (req, res) => {
//     throw new Error('에러는 에러처리 미들웨어로 갑니다.');
// });

// app.use((err, rep, res, next) => {
//     console.log(err);
//     res.status(500).send(err.message);
// });

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use((req, res, next) => {
    res.status(404).send('Not Found');
})


app.listen(app.get('port'), ()=> {
    console.log(app.get('port') + '번 포트에서 대기 중')
})