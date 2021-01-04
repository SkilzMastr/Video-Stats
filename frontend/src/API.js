import React, { Component } from 'react'
const axios = require('axios')
require('dotenv').config();


export default class API extends Component {
    
    

    constructor() {
        super();
        this.urlRef = React.createRef();
        this.state = {
            title: "",
            views: "",
            comments: "",
            likes: "",
            dislikes: "",
            favorites: "",
            thumbnail: "",
            channel: "",
            maxRes: "about:blank"
        };
    }
    


    res = ()=> {
        axios.get((process.env.API_URL || `http://localhost:5000`)+'/stats/'+this.removeData()).then((response)=>{
            
            this.setState({
                views: response.data.items[0].statistics.viewCount,
                comments: response.data.items[0].statistics.commentCount,
                likes: response.data.items[0].statistics.likeCount,
                dislikes: response.data.items[0].statistics.dislikeCount,
                favorites: response.data.items[0].statistics.favoriteCount
            })
        
        })

        axios.get((process.env.API_URL || `http://localhost:5000`)+'/title/'+this.removeData()).then((response)=>{
            this.setState({
                title: response.data.items[0].snippet.title,
                thumbnail: response.data.items[0].snippet.thumbnails.medium.url,
                channel: response.data.items[0].snippet.channelTitle,
                maxRes: response.data.items[0].snippet.thumbnails.maxres.url
            })

        })
    }

    removeData = ()=>{
        var url = this.urlRef.current.value
        return url.substr(url.length-11, url.length)
    }
    
    render() {
        return (
            <div>
                <label>
                    <a href={this.state.maxRes} download>
                        <img src={this.state.thumbnail} alt=""/>
                    </a>
                    <form>
                        <input ref={this.urlRef} type="text" placeholder="Enter YouTube URL"/>
                        <button type="reset" onClick={this.res} id="submit">Search</button>
                    </form>
                    <h4>Video: {this.state.title}</h4>
                    <h4>Channel: {this.state.channel}</h4>
                    <h4>Views: {this.state.views}</h4>
                    <h4>Likes: {this.state.likes}</h4>
                    <h4>Comments: {this.state.comments}</h4>
                    <h4>Dislikes: {this.state.dislikes}</h4>
                    <h4>Favorites: {this.state.favorites}</h4>

                </label>
            </div>
        )
    }
}
