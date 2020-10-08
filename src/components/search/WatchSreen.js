import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import { data } from './SearchResultList';
import Comment from './comment/Comment';

import windPng from '../../lib/png/wind.png';
import profilePng from '../../lib/png/unnamed.jpg';
import rightIcon_4 from '../../lib/png/iconRight-4.png';

const WatchBoxLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  position: relative;

  @media all and (max-width: 1200px) {
    display: block;
  }
`;

const FotterBar = styled.div`
  position: absolute;
  bottom: 5px;
  left: 0px;
  opacity: 0;
  width: 100%;

  @keyframes trans {
    0% {
      left:-100%;
    }
    100% {
      left:0%;
    }
  }

  .videoLength {
    bottom: 26px;
    position: absolute;
    background: red;
    width: 100%;
    height: 4px;
    animation-name: trans;
    animation-duration: 750s;
    animation-iteration-count:1;
    animation-direction:alternate;
    animation-fill-mode: forwards;
  }
`;

const WatchBoxFotterLayout = styled.div`
  height: auto;
  margin-left: 100px;
  position: relative;
  overflow: hidden;

  .ImgLayout {
    width: 100%;
    height: 720px;
  }

  &:hover ${FotterBar} {
    opacity: 1;
  }

  ${props => props.wide && `
    & {
      height: 31%;
      display: flex;
      justify-content: center;
      background-color: black;
      margin-left: 0px;
    }

    .ImgLayout {
      width: 65%;
      height: 101%;
    }
  `}

  @media all and (max-width: 1700px) {
    margin-left: 30px;

    ${props => props.wide && ` margin-left: 0px;`}
  }

  @media all and (max-width: 1200px) {
    margin-left: 10px;

    ${props => props.wide && `margin-left: 0px;`}
  }
`;

const LeftWatch = styled.div`
  width: 74%;
  margin-top: 20px;

  ${props => props.wide && `width: 100%;`}

  @media all and (max-width: 1700px) {
    width: 65%;

    .ImgLayout {
      width: 100%;
      height: 90%;
    }

    ${props => props.wide && `
      width: 100%;

      .ImgLayout {
        width: 1100px;
        height: 101%;
      }
    `}
  }

  @media all and (max-width: 1200px) {
    width: 99%;

    .ImgLayout {
      width: 99%;
    }

    ${props => props.wide && `
      width: 100%;

      .ImgLayout {
        width: 100%;
      }
    `}
  }
`;

const LeftWatchUser = styled.div`
  margin-top: 10px;
  margin-left: 100px; 
  
  ${props => props.wide && `width: 63%;`}

  @media all and (max-width: 1700px) {
    margin-left: 30px;

    ${props => props.wide && `width: 65%;`}
  }

  @media all and (max-width: 1450px) {
    ${props => props.wide && `width: 57%;`}
  }

  @media all and (max-width: 1200px) {
    margin-left: 10px;

    ${props => props.wide && `width: 99%;`}
  }
`;

const LeftWatchTitle = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #e3e3e3;

  & > span:first-child {
    font-size: 18px;
    font-weight: 500;
    color: #030303;
  }

  & > span:nth-child(3) {
    font-size: 14px;
    color: #606060;
  }
`;

const LeftWatchInformation = styled.div`
  margin-top: 20px;
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #e3e3e3;

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    flex: 1;

    span:first-child { font-size: 14px; font-weight: 700 };
    span:nth-child(2) { font-size: 13px; margin-bottom: 40px };
    span:nth-child(3) { font-size: 14px; }
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 25px;
    margin-right: 20px;
    cursor: pointer;
  }
`;

const LeftWatchComment = styled.div`
  margin-top: 20px;

  .myComment {
    font-size: 13px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;

    span {
      border-bottom: 1px solid #e3e3e3;
      width: 100%;
      height: 21px;
    }
  }

  .comment {
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
  }

  img {
    width: 50px;
    height: 45px;
    border-radius: 25px;
    margin-right: 15px;
  }
`;

const RightWatch = styled.div`
  margin-top: 20px;
  margin-left: 20px;

  ${props => props.wide && `
    position: absolute;
    top: 640px;
    right: 78px;
  `}

  @media all and (max-width: 1700px) {
    ${props => props.wide && `right: 30px;`}
  }

  @media all and (max-width: 1200px) {
    ${props => props.wide && `position: static;`}
  }
`;

const RightWatchListLayout = styled.div`
  display: flex;
  position: relative;
  margin-top: 10px;

  & > img:first-child {
    width: 168px;
    height: 94px;
    cursor: pointer;
  }
`;

const RightWatchTextLayout = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

const WatchScreen = (props) => {
  const params = data[props.title];

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  const [layout, setLayout] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [isWidened, setWidened] = useState(false);

  const onClickWiden = () => {
    setWidened(!isWidened);
  }

  const onScroll = (e) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setLayout((arr) => arr.concat(arr.length));
    }
  }

  return (
    <WatchBoxLayout>
      <LeftWatch wide={isWidened}>
        <WatchBoxFotterLayout wide={isWidened}>
          <img src={params.imgSrc} className="ImgLayout" />
          <FotterBar>
            <div className="videoLength"></div>
            <img src={windPng} onClick={onClickWiden} />
          </FotterBar>
        </WatchBoxFotterLayout>
        <LeftWatchUser wide={isWidened}>
          <LeftWatchTitle>
            <span>{params.title}</span>
            <br />
            <span>{params.informationNumber} • {params.informationDate}</span>
          </LeftWatchTitle>
          <LeftWatchInformation>
            <img src={profilePng} />
            <div>
              <span>{params.informationName}</span>
              <span>구독자 72만명</span>
              <span>{params.description} </span>
            </div>
            <div
              style={{
                width: '72px', 
                height: '37px', 
                backgroundColor: '#CC0000', 
                color: 'white', 
                fontSize: '14px', 
                alignItems: 'center', 
                display: 'flex', 
                justifyContent: 'center' ,
                cursor: 'pointer'
                }}>구독
            </div>
          </LeftWatchInformation>
          <LeftWatchComment>
            <span>댓글 1000개</span> <br />
            <div className="myComment">
              <img src={rightIcon_4} />
              <span>공개적으로 댓글을 남길 계정: 김민기</span>
            </div>
            {
              layout.map((val, key) => {
                return (
                  <Comment key={key} />
                )
              })
            }
          </LeftWatchComment>
        </LeftWatchUser>
      </LeftWatch>
      <RightWatch wide={isWidened}>
        <div>다음 동영상</div>
        {
          layout.map((val, key) => {
            return (
              <RightWatchListLayout key={key}>
                <img src={params.imgSrc} />
                <RightWatchTextLayout>
                  <span style={{ fontSize: '14px' }}>{params.title}</span>
                  <span style={{ fontSize: '11px', color: '#606060' }}>{params.informationName} <br /> {params.informationNumber} • {params.informationDate} </span>
                  <span style={{ fontSize: '11px', color: '#606060', marginTop: '19px' }}>{params.description}</span>
                </RightWatchTextLayout>
              </RightWatchListLayout>
            )
          })
        }
      </RightWatch>
    </WatchBoxLayout>
  )
}

export default WatchScreen;