import React from 'react';
import mockData from './MockData';
import styled from 'styled-components';

const ImageBox = styled.div``;

const EditImage = styled.img`
  width: 98%;
  height: 300px;
  padding-left: 20px;
`;

function PostImage() {
  return (
    <ImageBox>
      {mockData.map(data => {
        console.log(data);
        return <EditImage src={data.imageUrl} alt="postImage" />;
      })}
    </ImageBox>
  );
}

export default PostImage;
