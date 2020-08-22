import React,{useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import './tweet.css'
const Tweet = () => {
  const [input,setInput] = useState('');
  const history = useHistory();
  const tweet = (e) =>{
    e.preventDefault();
    // history.push('/search')
  }
  return (
    <div className="tweet">
        <div className="tweet_title">
           <Avatar>Z</Avatar>
            <input
             placeholder="What's happening?"
             onChange={e=>setInput(e.target.value)}
            />
        </div>
         <div className="tweet_btn_container">
           <Button 
           className="tweet_btn" 
           variant="outlined" fullWidth
           onClick={tweet}
           >Tweet</Button>
         </div>
    </div>
  )
}

export default Tweet
