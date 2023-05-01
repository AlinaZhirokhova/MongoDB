const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('./middlewares/cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Router = require('./routes/route');
const logger = require('./middlewares/logger');

dotenv.config();

const { PORT = 3005, API_URL = 'http://127.0.0.1', MONGO_DB = 'mongodb://127.0.0.1:27017/library'} = process.env;
 mongoose.connect(`${MONGO_DB}`);
 app.get('/', (request, response) => {
    response.statusCode = 200;
    response.send("Welcome to the library!");
}); 

app.use(bodyParser.json());
app.use(cors);
app.use(logger);
app.use(Router);

app.listen(PORT, () => {
    console.log(`Сервер находится по адресу ${API_URL}:${PORT}`);
});