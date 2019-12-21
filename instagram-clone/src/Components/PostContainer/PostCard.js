import React from 'react';
import { mockData } from './MockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const PostHeaderStyle = styled.div`
  // border: 1px solid red;
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
  padding: 10px 0 10px 20px;
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

const EditImage = styled.img`
  width: 98%;
  height: 300px;
  padding-left: 20px;
`;

const LikesIconsStyle = styled.div`
  padding-left: 35px;
  display: flex;
  flex-direction: column;
`;

const IconsStyle = styled.div`
  width: 8%;
  margin: 2px;
  display: flex;
  justify-content: space-evenly;
`;

const LikesStyle = styled.div`
  font-size: 1rem;
  width: 10%;
  padding-left: 5px;
`;

function PostCard() {
  return (
    <div>
      {mockData.map(data => {
        console.log(data);
        return (
          <div className="PostCard">
            <PostHeaderStyle>
              <div key={data.id}></div>
              <Thumbnail src={data.thumbnailUrl} alt="profilepic" />
              <Username>{data.username}</Username>
            </PostHeaderStyle>

            <EditImage src={data.imageUrl} alt="postImage" />

            <LikesIconsStyle>
              <div key={data.id}></div>
              <IconsStyle>
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faComment} />
              </IconsStyle>
              <LikesStyle>{data.likes} likes</LikesStyle>
            </LikesIconsStyle>
          </div>
        );
      })}
    </div>
  );
}

export default PostCard;
