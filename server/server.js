const express = require('express');
const path = require('path');
const router = require('./routes/router');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, '..', 'public/')));

//req.body 사용시
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", router);

app.listen(PORT, function (){
   console.log('Check out the app at http://localhost:' + PORT);
});
