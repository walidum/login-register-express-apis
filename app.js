const express = require('express');
const bodyParser = require("body-parser");
const db = require('./src/config/mongoose')
const cors = require('cors')
const path = require('path')
const api = require('./src/routes/api')
const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('', api)
app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
})

app.listen(process.env.PORT || 3000)
