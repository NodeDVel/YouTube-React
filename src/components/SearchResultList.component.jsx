import React from 'react';

import styled from 'styled-components';

import videoImg1 from '../lib/png/videoImg1.png';
import videoImg2 from '../lib/png/videoImg2.png';
import videoImg3 from '../lib/png/videoImg3.png';
import videoImg4 from '../lib/png/videoImg4.png';
import videoImg5 from '../lib/png/videoImg5.png';
import vlogImg from '../lib/png/vlog.png';
import newsImg from '../lib/png/news.png';
import gameImg from '../lib/png/game.png';

const MiddleHover = styled.div`
  transition: .2s ease;
  opacity: 0;
  position: absolute;
  top: 4.2%;
  left: 14.8%;
  text-align: center;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const MiddleHover2 = styled.div`
  width: 97px;
  height: 27px;
  transition: .8s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 100%;
  text-align: center;
  cursor: pointer;
`;

const MiddleHover3 = styled.div`
  width: 73px;
  height: 29px;
  transition: .8s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 100%;
  text-align: center;
  cursor: pointer;
`;

const ImgHover = styled.div`
  position: relative;

  &:hover ${MiddleHover2} {
    opacity: 1;
  }

  &:hover ${MiddleHover3} {
    opacity: 2;
  }
`;

const SearchResultListLayout = styled.div`
  display: flex;
  position: relative;
  margin-top: 18px;
  height: 138px;
  
  &:hover ${MiddleHover} {
    opacity: 1;
  }

  &:first-child {
    background-color: black;
  }

  & > img:first-child {
    width: 246px;
    height: 138px;
    cursor: pointer;
  }
`;

const SearchListTextLayout = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

const SearchResultList = (props) => {
  const data = {
    "인기차트": {
      imgSrc: videoImg1,
      title: '노래방 인기차트 TOP 20 가사',
      information: '낭소월드 • 조회수 11만회 • 1일전',
      description: '노래방 인기차트 발라드 TOP 20 가사 KPOP Chart'
    },
    "브이로그": {
      imgSrc: vlogImg,
      title: 'YouTube Vlog',
      information: 'firma • 조회수 20만회 • 3일전',
      description: '유튜버의 vlog',
    },
    "뉴스": {
      imgSrc: newsImg,
      title: 'new News',
      information: 'MBC News • 조회수 32만회 • 1달전',
      description: '새로운 뉴스'
    },
    "게임": {
      imgSrc: gameImg,
      title: '리그 오브 레전드',
      information: 'LOL • 조회수 120만회 • 1일전',
      description: '새 게임 영상'
    },
  }
  
  const params = props.title;
  const searchName = data[params];

  return (
    <>
      <SearchResultListLayout>
        <img src={searchName.imgSrc} />
        <MiddleHover>
          <div>
            <ImgHover>
              <img src={videoImg2} />
              <MiddleHover2>
                <img src={videoImg4} />
              </MiddleHover2>
            </ImgHover>
            <ImgHover>
              <img src={videoImg3} />
              <MiddleHover3>
                <img src={videoImg5} />
              </MiddleHover3>
            </ImgHover>
          </div>
        </MiddleHover>
        <SearchListTextLayout>
          <span style={{ fontSize: '18px' }}>{searchName.title}</span>
          <span style={{ fontSize: '13px', color: '#606060' }}>{searchName.information} </span>
          <span style={{ fontSize: '13px', color: '#606060', marginTop: '19px' }}>{searchName.description}</span>
        </SearchListTextLayout>
      </SearchResultListLayout>
    </>
  )
}

export default SearchResultList;