import React, { useRef, useEffect } from 'react'

import './style.css';

export default function PostText() {

  const tweetText = useRef(null);
  
  const tweetar = () => {
    console.log(tweetText.current.value);
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
