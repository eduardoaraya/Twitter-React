import React, { useRef, useState } from 'react'
import { connect } from 'react-redux';
import './style.css';

const PostText = ({ dispatch }) => {
  const [count,setCount] = useState(0);
  const tweetText = useRef(null);

  const tweetar = () => {
    if(!tweetText.current.value)
      return;

    dispatch({
      type: 'ADD_POST',
      post: {
        _id: Math.random() * 100,
        timestamp: new Date().getTime(),
        user_id: 1,
        user_name: 'Eduardo',
        user_nickname: '@eduardo',
        picture_url: '',
        post_text: tweetText.current.value
      }
    })
    tweetText.current.value = '';
    setCount(0) 
  }

  const handleKeyDown = (e) => {
    setCount(tweetText.current.value.length) 
  }

  return (
    <div className="post  border-highlight">
      <div className="post-area">
        <figure className="avatar"></figure>
        <div className="post-text">
          <textarea className="post-input" ref={tweetText} onKeyUp={handleKeyDown} placeholder="O que está acontecendo?"></textarea>
        </div>
      </div>
      <div className="post-options">
        <button className="btn btn-primary" onClick={tweetar}>Tweetar</button>
        <div className={ count > 85 ? 'acount-flag danger' : 'acount-flag'}>{count}</div>  
      </div>
    </div>
  )
}


export default connect()(PostText);