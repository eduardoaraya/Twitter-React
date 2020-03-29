import React from 'react'

import './style.css';

export default function Post() {
  return (
    <div className="post-item">
      <figure className="post-avatar"></figure>
      <header className="post-header">
        <div className="post-info">
          <span className="name">@Nickname</span>
          <span className="time">7 min</span>
        </div>
        <div className="post-more">+</div>
      </header>
      <div className="post-content">
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  )
}
