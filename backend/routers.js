import express from 'express';
// import userInfo from './userinfo.json' assert {type:'json'};
import fs from 'fs';

const router = express.Router();
var jsondata = fs.readFileSync("userinfo.json");
var data = JSON.parse(jsondata);

router.get('/', (req,res) => {
    res.send(data);
});

router.post('/', (req,res) => {
    console.log(req.body);
    let newdata = req.body;
    data.push(newdata);
    res.send(console.log("ok!"));
    console.log(data);
    var newData = JSON.stringify(data);
    console.log(newData);
    fs.writeFile("userinfo.json",newData, (err) => {
        if (err) throw err;
        // var jsondata = fs.readFileSync("userinfo.json");
        console.log("data wrote successfully");
    });
});



export default router;