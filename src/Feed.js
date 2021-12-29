import React,{useState,useEffect} from 'react'
import './Feed.css'
import TweetBox from './TweetBox';
import Post from './Post';


function Feed() {
    const [posts,setPosts]=useState([]);



    return (
        <div className="feed">
            <div className="feed__header">
            <h2>Home</h2>
            </div>
            <TweetBox/>
            
           <Post 
           displayName="Naveed hyder"
           username="naveed_hyder"
           verified={true}
           text="Its working!!!!1"
           image="https://pbs.twimg.com/media/E9NJ55QXEAMkPhG?format=jpg&name=small"
           avatar="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"
           />
        </div>
    )
}

export default Feed
