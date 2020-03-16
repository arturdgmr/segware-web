import React from 'react';
import PostsList from '../components/PostsList/postsList'
import Button from '../components/Button/button'

function Home() {
  return (
    <div>
      <Button url="/novo" divClassName='divBtnPlus' clName='btn' icon='fas fa-plus'/>
      <PostsList />
    </div>
  );
}

export default Home;