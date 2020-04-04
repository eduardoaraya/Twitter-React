import React from 'react'

import SideNavigator from '../../components/side-navigator/SideNavigator';
import PostList from '../../components/post-list/PostList'
import PostText from '../../components/PostText/PostText'

import './index.css';

export default function Home() {
  return (
    <div className="content" id="home-page">
      <div className="grid-page">
        <div className="side-navigator">
           <SideNavigator/>
        </div> 
        <div className="main border-highlight">
          <header className="header-page border-highlight">
            <h1 className="title-page">Página inicial</h1>
          </header>
          <PostText/>
          <div className="separator"></div>
          <PostList/>
        </div>
      </div>
    </div>
  )
}
