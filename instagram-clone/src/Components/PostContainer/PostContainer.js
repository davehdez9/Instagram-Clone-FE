import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostLikeIcons from './PostLikesIcons';
import PostComments from './PostComments';
import styled from 'styled-components';

const PostContainerStyle = styled.div`
  border: 1px solid red;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

function PostContainer() {
  return (
    <PostContainerStyle>
      <PostHeader />
      <PostImage />
      <PostLikeIcons />
      <PostComments />
    </PostContainerStyle>
  );
}

export default PostContainer;
