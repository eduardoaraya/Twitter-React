import React from 'react'

import './style.css';

export default function Post() {
  return (
    <div className="post-item border-highlight">
      <figure className="post-avatar"></figure>
      <header className="post-header">
        <div className="post-info">
          <span className="name">Name</span>
          <span className="nickname">@nickname</span>
          <span className="time">7 min</span>
        </div>
        <div className="post-more">
          <div className="icon">
          <svg viewBox="0 0 24 24"><g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g></svg>
          </div>
        </div>
      </header>
      <div className="post-content">
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </span>
      </div>
    </div>
  )
}
