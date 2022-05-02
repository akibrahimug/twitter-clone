
import {  CalendarMonthOutlined, EmojiEmotionsOutlined, GifBoxOutlined, Image, LocationDisabled, PollOutlined,  Public} from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React from 'react'
import './TweetBox.css'

export default function TweetBox() {
    return (
        <div className="tweetBox">
        {/* form */}
            <form>
                <div className="tweetBox__input">
                {/* image */}
                    <Avatar />
                    <input placeholder="What's happening"/>
                </div>
                {/* Everyone can reply */}
                <p className="tweetBox__publicBtn">
                    <Public />
                    Everyone can reply    
                </p>
 
                <div className="tweetBox__buttons">
                    <div className="tweetBox__buttons__small">
                        <Image />
                        <GifBoxOutlined />
                        <PollOutlined />
                        <EmojiEmotionsOutlined />
                        <CalendarMonthOutlined />
                        <LocationDisabled  />
                    </div>
                    <Button className="tweetBox__tweetButton">Tweet</Button>
                </div>
            </form>
            {/* More tweets */}
            <div className="tweetBox__moreTweets">
                <h4>Show 248 Tweets</h4>
            </div>
        </div>
    )
}
