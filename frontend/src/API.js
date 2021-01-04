import React, { Component } from 'react'
const axios = require('axios')
require('dotenv').config();


export default class API extends Component {
    
    

    constructor() {
        super();
        this.urlRef = React.createRef();
        this.state = {
            views: "Channel Info"
        };
    }
    


    res = ()=> {
        axios.get(process.env.API_URL || `http://localhost:5000/video/${this.removeData()}`).then((response)=>{
            console.log(response.data.items["statistics"].viewCount)
        })
    }

    removeData = ()=>{
        var url = this.urlRef.current.value
        return url.slice(32, url.length)
    }
    
    render() {
        return (
            <div>
                <label>
                    <input ref={this.urlRef} type="text" placeholder="Enter YouTube URL"/>
                    <button onClick={this.res} id="submit">Search</button>
                </label>
            </div>
        )
    }
}
