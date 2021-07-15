import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hello, Express!!');
    next();
    next('route');
    }, (req, res, next) => {
       console.log('실행되지 않습니다.');
       next(); 
    }, (req, res, next) => {
        console.log('실행되지 않습니다.');
        next();
    }
);

export default router;