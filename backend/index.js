const express = require("express")
const request = require("request")
const app = express();
const port = process.env.PORT || 5000
require('dotenv').config()

app.get('/', (req, res)=>{
    res.sendStatus(200)
})

app.get('/stats/:id', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND || 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);    
    
    
    request(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${req.params.id}&key=${process.env.KEY}`, { json: true }, (err, resp, body)=>{
            if (err) { return console.error(err);}
            res.json(body)
        })
})

app.get('/title/:id', (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND || 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    request(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${req.params.id}&key=${process.env.KEY}`, { json: true }, (err, resp, body)=>{
            if (err) { return console.error(err);}
            res.json(body)
        })

})


app.listen(port, ()=>{console.log(`Listening on ${port}`)})