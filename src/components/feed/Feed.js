import React from 'react'
import './feed.css'
import Tweet from './components/tweet/Tweet'
import Post from './components/post/Post'

const contents =[1,2,3,4,5,6,7,8,9]
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_bar">
         <h2>Home</h2>
      </div>
      <Tweet/>
      {
        contents.map(item=>(
          <Post/>
        ))
      }
    
    </div>
  )
}

export default Feed
