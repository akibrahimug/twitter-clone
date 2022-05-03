import React, { useState, useEffect } from 'react'
import "./Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'
import {db} from "./firbase"
import { collection, query, onSnapshot} from '@firebase/firestore'

export default function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const q = query(collection(db, "posts"))
        const p = onSnapshot(q, (querySnapshot) => {
            console.log(querySnapshot._snapshot)
        })
    }, [])
    return (
        <div className="feed">
            {/* header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {/* tweetbox */}
            <TweetBox />
            {/* post */}
            {posts.map(({displayName, userName, verified, text, avatar, image, job }, index) => (
            <Post 
                key={index}
                displayName={displayName}
                userName={userName}
                verified={verified}
                text={text}
                avatar={avatar}
                image={image}
                job={job}
            />
            ))}
        </div>
    )
}
