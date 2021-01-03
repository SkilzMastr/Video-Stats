import React from 'react'
const request =require('request')
require('dotenv').config();

export default function API({ id }) {
    
    constructor(info); {
        super(info);
        this.state = {
            views: JSON.stringify(fetch())["views"],
        };
    }



    function fetch() {
        request(process.env.API_URL || `http://localhost:5000/video/${id}`, { json: true }, (err, resp, body)=>{
            if (err) { return console.error(err);}
            
        })
    }
    
    return (
        <div>
            <h1>{info.views}</h1>
        </div>
    )
}
