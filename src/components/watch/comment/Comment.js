import React from 'react';

import styled from 'styled-components';

import { ImgData } from '../../../lib/png';

const CommentWrapper = styled.div`
  font-size: 13px;
  display: flex;
  margin-bottom: 10px;

  div {
    display: flex;
    flex-direction: column;
  }
  
  div > span:nth-child(1) {
    margin-bottom: 5px;
  }
`;

const Comment = () => {
  return (
    <CommentWrapper>
      <img src={ImgData.iconRight4} />
      <div>
        <span>김민기</span>
        <span>
          댓글댓글댓글댓글댓글댓글댓글댓글댓글댓
          <br />
          글댓글댓글댓글댓글댓글댓글댓글댓글댓글
          <br />
          댓글댓글댓글댓글댓글댓글댓글댓글댓글댓
        </span>
      </div>
    </CommentWrapper>
  )
}

export default Comment;