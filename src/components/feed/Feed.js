import React from 'react'
import './feed.css'
import Tweet from './components/tweet/Tweet'
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_bar">
         <h2>Home</h2>
      </div>
      <Tweet/>
    </div>
  )
}

export default Feed
