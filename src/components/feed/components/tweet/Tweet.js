import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'
import './tweet.css'
const Tweet = () => {
  return (
    <div className="tweet">
        <div className="tweet_title">
           <Avatar>Z</Avatar>
            <input
             placeholder="What's happening?"
            />
        </div>
         <div className="tweet_btn_container">
           <Button className="tweet_btn" variant="outlined" fullWidth>Tweet</Button>
         </div>
        
      
    
    </div>
  )
}

export default Tweet
