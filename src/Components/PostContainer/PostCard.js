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
  align-items: center;
  padding: 10px 0 10px 20px;
`;

const Username = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding: 0 15px;
`;

const Thumbnail = styled.img`
  position: relative;
  width: 1.7rem;
  height: 1.7rem;
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
  width: 55px;
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
`;

const LikesStyle = styled.div`
  font-size: 1rem;
  padding: 5px;
  font-weight: bold;
`;

const PostComments = styled.div`
  display: flex;
  align-items: baseline;
  line-height: 0px;
  padding-left: 15px;
`;

const Placeholder = styled.input`
  border: solid green;
  padding: 10%;
  ::placeholder {
    height: 10px;
    padding: 15px;
    text-align: left;
  }
`;

{
  mockData.map(data => {
    console.log('data: ', data);

    data.comments.map(comment => {
      console.log('username: ', comment.username);
    });
  });
}

function PostCard() {
  return (
    <div>
      {mockData.map(data => {
        {
          /* {
          console.log(data.comments);
        } */
        }
        return (
          <div className="PostCard">
            <PostHeaderStyle>
              <div key={data.id}></div>
              <Thumbnail src={data.thumbnailUrl} alt="profilepic" />
              <Username>{data.username}</Username>
            </PostHeaderStyle>

            <>
              <EditImage src={data.imageUrl} alt="postImage" />
            </>

            <LikesIconsStyle>
              <div key={data.id}></div>
              <IconsStyle>
                <FontAwesomeIcon className="icon" icon={faHeart} />
                <FontAwesomeIcon className="icon" icon={faComment} />
              </IconsStyle>
              <LikesStyle>{data.likes} likes</LikesStyle>
            </LikesIconsStyle>

            {data.comments.map(comment => {
              console.log('username in card: ', comment.username);
              return (
                <PostComments>
                  <div key={comment.id}></div>
                  <Username>{comment.username}</Username>
                  <div className="text">
                    <p>{comment.text}</p>
                  </div>
                </PostComments>
              );
            })}

            <PostComments>
              <Placeholder type="text" placeholder="Add Comment ..." />
            </PostComments>
          </div>
        );
      })}
    </div>
  );
}

export default PostCard;
