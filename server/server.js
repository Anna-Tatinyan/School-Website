const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const router = express.Router();
require('dotenv').config();
const route = require('./routes/route.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.use('/',route);



const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
