const express = require('express');
const app = express();

const router = express.Router();
require('dotenv').config();


var getRoute = require('./routes/getRoute');
var postRoute = require('./routes/postRoute');


app.use(express.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', [`http://${process.env.HOST}:${process.env.CLIENT_PORT}`]);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});



app.use('/', getRoute);
app.use('/', postRoute);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
