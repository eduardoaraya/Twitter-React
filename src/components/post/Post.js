import React from 'react'

import './style.css';

export default function Post({post}) {
  return (
    <div className="post-item border-highlight">
      <figure className="post-avatar" style={{
        backgroundImage: post.picture_url ? `url(${post.picture_url})` : `url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ85ZvDEOb9-18hUBBlBRvl84QKhE9Z2oMULrNeVVslY5XWUN1n&usqp=CAU)`
      }}></figure>
      <header className="post-header">
        <div className="post-info">
        <span className="name">{post.user_name}</span>
        <span className="nickname">{post.user_nickname}</span>
        <span className="time">{post.timestamp}</span>
        </div>
        <div className="post-more">
          <div className="icon">
          <svg viewBox="0 0 24 24"><g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g></svg>
          </div>
        </div>
      </header>
      <div className="post-content">
        <span>{post.post_text}</span>
      </div>
    </div>
  )
}
