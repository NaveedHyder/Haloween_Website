import React from 'react'
import './TweetBox.css'
import {Avatar,Button} from "@material-ui/core"

function TweetBox() {
    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"/>
                    <input placeholder="What's happening" type="text" />
                    
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional : Enter Image URL" type="text" />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;