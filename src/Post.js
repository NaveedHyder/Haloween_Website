import React from 'react'
import './Post.css'
import {Avatar} from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({displayName,username,verified,text,image,avatar}) {
    return (
        <div className="post"> 
           <div className="post__avatar">
           <Avatar src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg"/>
           </div>
           <div className="post__body">
               <div className="post__header">
                   <div className="post__headertext">
                       <h3>
                           Naveed hyder{" "}
                           <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge"/>
                            </span>
                        </h3>
                   </div>
                   <div className="post__headerDescription">
                       <p>I challenge you to build a Twitter clone with me</p>
                   </div>
               </div>
               <img src="https://pbs.twimg.com/media/E9z_nshVQAE_hSU?format=jpg&name=small" alt="" />
               <div className="post__footer">
                < ChatBubbleOutlineIcon fontSize="small"/>
                < RepeatIcon fontSize="small"/>
                < FavoriteBorderIcon fontSize="small"/>
                < PublishIcon fontSize="small"/>
               </div>
           </div>
        </div>
    )
}

export default Post;
 