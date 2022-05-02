import { ChatBubble, ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

export default function Post({displayName, userName, verified, text, image, description}) {
    return (
        <div className="post">
            <div className="post__job">
                <ChatBubble />
                <p className="post__jobTitle">Computer Programming</p>
                <span>.</span>
                <p className="post__seeMore">See more</p>
            </div>
            <div className="post__mainSection">
            <div className="post__avatar">
                <Avatar />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Akibrahim{" "}
                        <span className="post__headerSpecial">
                            <VerifiedUser className="post__badge"/>
                            @kasoma
                        </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a twitter clone</p>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1651438449770-244318535424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80" className="post__image" alt=""/>
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
