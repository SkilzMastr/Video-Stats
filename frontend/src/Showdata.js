import React from 'react'
const request = require('request')


export default function Showdata({ id }) {
    
    
    function makeRes(){
        
        request(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${process.env.API}`, { json: true }, (err, res, body)=>{
            if (err) { return console.error(err);}
            return body.json;
        })
    }
    
    return (
        <div>
            <h3>{makeRes}</h3>
        </div>
    )
}
