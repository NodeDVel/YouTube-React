import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import SearchResultList, { data } from '../components/SearchResultList.component';

import profilePng from '../lib/png/unnamed.jpg';
import rightIcon_4 from '../lib/png/iconRight-4.png';

const WatchBoxLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  `;

const LeftWatch = styled.div`
  margin-top: 20px;
  margin-left: 110px;
  img {
    width: 1280px;
    height: 720px;
  }
`;

const LeftWatchTitle = styled.div`
  width: 100%;
  margin-top: 10px;
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

  const [layout, setLayout] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  const [isWidened, setWidened] = useState(false);
  //검정색 배경을 두고 opacity나 그걸로 처리해서 누르면 사라지고

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
      <LeftWatch>
        <img src={params.imgSrc} />
        <LeftWatchTitle>
          <span>{params.title}</span>
          <br/>
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
            style={{ width: '72px', height: '37px', backgroundColor: '#CC0000', color: 'white', fontSize: '14px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            구독
          </div>
        </LeftWatchInformation>
        <LeftWatchComment>
          <span>댓글 1000개</span> <br/>
          <div className="myComment">
            <img src={rightIcon_4} />
            <span>공개적으로 댓글을 남길 계정: 김민기</span>
          </div>
          {
            layout.map(() => {
              return (
                <div className="comment">
                  <img src={rightIcon_4} />
                  <div>
                    <span>김민기</span> 
                    <span>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓<br />글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글<br />댓글댓글댓글댓글댓글댓글댓글댓글댓</span>
                  </div>
                </div>
              )
            })
          }
        </LeftWatchComment>
      </LeftWatch>
      <RightWatch>
        <span>다음 동영상</span>
        {
          layout.map(() => {
            return (
              <RightWatchListLayout>
                <img src={params.imgSrc} />
                <RightWatchTextLayout>
                  <span style={{ fontSize: '18px' }}>{params.title}</span>
                  <span style={{ fontSize: '13px', color: '#606060' }}>{params.informationName} <br/> {params.informationNumber} • {params.informationDate} </span>
                  <span style={{ fontSize: '13px', color: '#606060', marginTop: '19px' }}>{params.description}</span>
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