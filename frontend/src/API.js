import React, { Component, useRef} from 'react'
const axios = require('axios')
require('dotenv').config();


export default class API extends Component {
    
    

    constructor() {
        super();
        this.state = {
            urlRef: useRef(),
            views: "Channel Info"
        };
    }
    


    res = ()=> {
        axios.get(`process.env.API_URL || http://localhost:5000/video/${this.state.id}`).then((response)=>{
            console.log(response.data.items["statistics"].viewCount)
        })
    }
    
    render() {
        return (
            <div>
                <input ref={urlRef} type="text" placeholder="Enter YouTube URL"/>
                <button onClick={this.res} id="submit">Search</button>
            </div>
        )
    }
}
