import { ChatBubble, ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

export default function Post({displayName, userName, verified, text, image, avatar, job}) {
    return (
        <div className="post">
            <div className="post__job">
                <ChatBubble />
                <p className="post__jobTitle">{job}</p>
                <span>.</span>
                <p className="post__seeMore">See more</p>
            </div>
            <div className="post__mainSection">
            <div className="post__avatar">
                <Avatar  src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}{" "}
                        <span className="post__headerSpecial">
                            {verified && <VerifiedUser className="post__badge"/>}
                            @{userName}
                        </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} className="post__image" alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                    <Publish  fontSize="small" />
                </div>
            </div>
            </div>
        </div>
    )
}
