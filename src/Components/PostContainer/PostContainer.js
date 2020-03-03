import React from 'react';
import PostCard from './PostCard';
import styled from 'styled-components';

const PostContainerStyle = styled.div`
  // border: 1px solid red;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

function PostContainer() {
  return (
    <PostContainerStyle>
      {/* <PostHeader />
      <PostImage />
      <PostLikeIcons />
      <PostComments /> */}
      <PostCard />
    </PostContainerStyle>
  );
}

export default PostContainer;
