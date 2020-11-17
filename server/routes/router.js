const express = require('express');
const os = require('os');
const router = express.Router();
const db = require("../dbconnection");

/* GET home page. */
router.get('/api/getUsername', (req, res, next) => {
    res.send({ username: os.userInfo().username });
});

/* GET DB DATA */
router.get('/getData', (req, res) => {
    db.query("select * from `table`", (err, rows) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
});

router.post('/apiposttest', (req, res, next) => {
   let {id, pw} = req.body;
   console.log('get ID :' + id + ' PW : ' + pw);
   res.send({result: true});
});

router.get('/apitest', (req, res) => {
   res.send({'result': 'test'});
});

module.exports = router;
