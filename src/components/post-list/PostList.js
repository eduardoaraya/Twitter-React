import React from 'react';
import { connect } from 'react-redux';
import Post from '../post/Post';
import './style.css';

const PostList = ({posts}) => {
  return (
    <div className="post-list">
        { posts.map( post => <Post key={post._id} post={post}/> )}
    </div>
  )
}

export default connect(
  state => ({
    posts:state.posts
  })
)(PostList);
