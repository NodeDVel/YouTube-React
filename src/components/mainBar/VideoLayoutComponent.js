import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { ImgData } from '../../lib/png';
import { data } from '../search/SearchResultItem';

const MiddleHover = styled.div`
  transition: .2s ease;
  opacity: 0;
  position: absolute;
  top: 3%;
  right: 3%;
  text-align: center;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const MiddleHover2 = styled.div`
  width: auto;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 100%;
  text-align: center;
  cursor: pointer;

  ${props => props.changed && `
    img {
      width: 42px;
      height: 28px;
    }
  `}
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
    opacity: 1;
  }
`;

const VideoLayout = styled.div`
  width: 24.5%;
  margin-right: 5px;
  position: relative;
  cursor: pointer;

  ${props => props.changed && `width: 19.6%;`}

  &:hover ${MiddleHover} {
    opacity: 1;
  }

  @media all and (max-width: 1500px) {
    width: 32%;
  }

  @media all and (max-width: 1000px) {
    width: 49%;
  }
`;

const VideoBoxLayout = styled.div`
  display: flex;
  margin-bottom: 15%;

  & > img:first-child {
    margin: 0px 20px 0px 0px;
    border-radius: 40px;
    width: 36px;
    height: 36px; 
    margin-bottom: 4%;
  }
`;

const VideoTextLayout = styled.div`
  height: 100%;

  span:first-child {
    font-size: 14px;
    color: #030303;
  }

  span:nth-child(3) {
    font-size: 13px;
    color: #606060;
  }
`;

const VideoLayoutComponent = ({
  collapsed,
  num,
  lists,
  onInsert,
  onRemove,
  res,
}) => {
  data.인기차트.id = `인기차트-${num}`;

  const id = lists.find(list => {
    if (list.id === data.인기차트.id) {
      return true;
    }
  });

  const previousData = { ...data.인기차트 };

  return (
    <VideoLayout changed={collapsed}>
      <Link to="/search/인기차트/watch"><img src={ImgData.chart} style={{ width: '100%', marginBottom: '4%' }} /></Link>
      <MiddleHover>
        <div>
          <ImgHover>
            <img onClick={id ? () => onRemove(previousData.id) : () => onInsert(previousData)}  src={id ? ImgData.check : ImgData.videoImg2} />
            <MiddleHover2 changed={id}>
              <img src={id ? ImgData.plus : ImgData.videoImg4} width={id ? "40px" : "97px"} />
            </MiddleHover2>
          </ImgHover>
          <ImgHover>
            <img src={ImgData.videoImg3} />
            <MiddleHover3>
              <img src={ImgData.videoImg5} />
            </MiddleHover3>
          </ImgHover>
        </div>
      </MiddleHover>
      <VideoBoxLayout>
        <img src={ImgData.unnamed} />
        <VideoTextLayout>
          <span>노래방 인기차트 발라드 TOP 20 가사 - {num}</span>
          <br />
          <span>낭소월드 <br /> 조회수 11만회 • 1일전</span>
        </VideoTextLayout>
      </VideoBoxLayout>
    </VideoLayout>
  )
}

export default VideoLayoutComponent;