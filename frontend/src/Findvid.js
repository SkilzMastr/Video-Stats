import React, { useRef } from 'react'
import API from './API'

export default function Findvid() {
    
    const urlRef = useRef()

    function removeData(){
        var url = urlRef.current.value
        url.replace('https://youtube.com/watch?v=', '')
        url.replace('https://www.youtube.com/watch?=', '')
        return url
    }

    
    return (
        <div>
            <label>
                <input ref={urlRef} type="text" placeholder="Enter YouTube URL"/>
                <button onClick={<API id={removeData}/>} id="submit">Search</button>
            </label>
        </div>
    )
}
