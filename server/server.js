const express = require('express');

require('dotenv').config()

const app = express();
// var router = require('./routes/route.js');
// // ...
// app.use('./routes/route.js'), route);


app.use(express.json());


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});




const port = process.env.PORT || process.env.SERVER_PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
