import express from 'express';

import morgan from 'morgan';
import createError from 'http-errors';

import mainRouter from './routes/main.js';

const run = () => {
    const server = express();

    
    server.set('views', './http/views');
    server.set('view engine', 'ejs');

    server.use(morgan(':method :url :status :response-time ms - :res[content-length]')); //middleware logger for check info about all request(includes static files, server requests etc.)
   
   
   

    server.use(express.static('./http/public'));

    server.use('/', mainRouter);

    server.use((req, res, next) => {
        next(createError(404));
    });

    server.use((err, req, res, next) => {
        console.log('Error message:', err.message);
        console.log('Error stack:', err.stack);
        console.log('Views directory:', server.get('views'));

        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);
        res.render('error');
    });

    return server;
};

export default run;