const express = require("express")
const request = require("request")
const app = express();
const port = process.env.PORT || 5000
require('dotenv').config()

app.get('/', (req, res)=>{
    res.sendStatus(200)
})

app.get('/video/:id', (req, res)=>{
    request(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${req.params.id}&key=${process.env.KEY}`, { json: true }, (err, resp, body)=>{
            if (err) { return console.error(err);}
            console.log(process.env.KEY)
            res.json(body)
        })
})


app.listen(port, ()=>{console.log(`Listening on ${port}`)})