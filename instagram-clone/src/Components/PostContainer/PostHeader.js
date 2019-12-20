import React from 'react';
import { mockData } from './MockData';
import styled from 'styled-components';

const PostHeaderStyle = styled.div`
  border: 1px solid red;
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
  padding-left: 10px;
`;

const Username = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-left: 20px;
`;

const Thumbnail = styled.img`
  position: relative;
  width: 2%;
  height: 2%;
`;

function PostHeader() {
  return (
    <div>
      {mockData.map(data => {
        return (
          <PostHeaderStyle>
            <div key={data.id}></div>
            <Thumbnail src={data.thumbnailUrl} alt="profilepic" />
            <Username>{data.username}</Username>
          </PostHeaderStyle>
        );
      })}
    </div>
  );
}

export default PostHeader;
