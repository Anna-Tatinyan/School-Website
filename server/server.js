const express = require('express');

require('dotenv').config();

const app = express();
var loginRouter = require('./routes/router.js');
// ...


app.use(express.json());


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', [process.env.HOST]);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});




const router = express.Router();
// test route
app.use('/api', router);
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

//route to handle user registration
router.post('/login',loginRouter.login)

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
