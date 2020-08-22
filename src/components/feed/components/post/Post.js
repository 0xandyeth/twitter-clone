import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import CommitIcon from '@material-ui/icons/CommentOutlined'
import ShareIcon from '@material-ui/icons/ShareOutlined'
import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined'
import SendIcon from '@material-ui/icons/SendOutlined'
import './post.css'
const Post = () => {
  return (
    <div className="post">
       <Avatar>Z</Avatar>
       <div className="post_content">
          <div className="post_content_header">
             <div className="post_content_info">
                <span>Zhengzhen</span>
                <VerifiedUserIcon style={{ color:"white",marginLeft:10 }}/>
             </div>
             <div className="post_content_title">
               <p>Booom!! you guys are awesome!</p>
             </div>
             <div className="post_content_image">
                <img className="post_content_image_x" src="https://pbs.twimg.com/media/ETcvy4ZWAAAVA6W?format=jpg&name=small"/>
             </div>
          </div>
          <div className="post_content_footer">
             <CommitIcon style={{ color:"gray"}}/>
             <ShareIcon style={{ color:"gray"}}/>
             <FavoriteIcon style={{ color:"gray"}}/>
             <SendIcon style={{ color:"gray"}}/>
          </div>
          
       </div>
    </div>
  )
}

export default Post
