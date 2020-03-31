import React from 'react'

import './style.css';

export default function PostText() {
  return (
    <div className="post  border-highlight">
      <div className="post-area">
          <figure className="avatar"></figure>
          <div className="post-text">
            <textarea className="post-input" placeholder="O que está acontecendo?"></textarea>
          </div>
      </div>
      <div className="post-options">
        <button className="btn btn-primary">Tweetar</button>
      </div>
    </div>
  )
}
