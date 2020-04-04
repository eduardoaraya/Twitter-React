import React, { useRef } from 'react'
import { connect } from 'react-redux';
import './style.css';

const PostText = ({ dispatch }) => {

  const tweetText = useRef(null);

  const tweetar = () => {
    dispatch({
      type: 'ADD_POST',
      post: {
        _id: Math.random() * 100,
        timestamp: new Date().getUTCFullYear(),
        user_id: 1,
        user_name: 'Eduardo',
        user_nickname: '@eduardo',
        picture_url: '',
        post_text: tweetText.current.value
      }
    })
  }

  return (
    <div className="post  border-highlight">
      <div className="post-area">
        <figure className="avatar"></figure>
        <div className="post-text">
          <textarea className="post-input" ref={tweetText} placeholder="O que está acontecendo?"></textarea>
        </div>
      </div>
      <div className="post-options">
        <button className="btn btn-primary" onClick={tweetar}>Tweetar</button>
      </div>
    </div>
  )
}


export default connect()(PostText);