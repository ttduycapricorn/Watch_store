import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// import configViewEngine from './configs/viewEngine';
import configCORS from './configs/cors';

const app = express();

configCORS(app);

app.get('/', (req, res) => {
    res.send('hello world from TranThaiDuy');
});

app.get('/api', (req, res) => {
    res.send('you have request http://localhost:8080/api');
});

app.listen(8080, () => {
    console.log('server running http://localhost:8080');
});
