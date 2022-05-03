import { Search } from '@mui/icons-material'
import React from 'react'
import "./Widget.css"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

export default function Widget() {
    return (
        <div className="widget"> 
            <div className="widget__input">
                <Search className="widget__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widget__container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1519708706451210242"}/>
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="akibrahimug"
                    options={{height: 400}}
                />
                <TwitterShareButton 
                    url={'https://twitter.com/Akibrahimug/with_replies'}
                    options={{text: "Twitter clone with React" , via: "Kasoma"}}
                />
            </div>
        </div>
    )
}
