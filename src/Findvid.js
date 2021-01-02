import React, { useRef } from 'react'
const request = require('request')

export default function Findvid() {
    
    const urlRef = useRef()

    function makeRes(){
        var url = urlRef.current.value
        url.replace('https://youtube.com/watch?v=', '')
        url.replace('https://www.youtube.com/watch?=', '')
        request(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${url}&key=${process.env.API}`, { json: true }, (err, res, body)=>{
            if (err) { return console.error(err);}
            console.log(body.data)
        })
    }

    
    return (
        <div>
            <label>
                <input ref={urlRef} type="text" placeholder="Enter YouTube URL"/>
                <button onClick={makeRes} id="submit">Search</button>
            </label>
        </div>
    )
}
