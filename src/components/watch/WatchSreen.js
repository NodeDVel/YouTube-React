import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { search_data } from '../../lib/apiData';
import { ImgData } from '../../lib/png';

import { searchContinuePostList, searchPostList } from '../../modules/youtubeList';

import Comment from './comment/Comment';

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

  ${props => props.wide && `width: 100%; height: 100%;`}

  @media all and (max-width: 1700px) {
    width: 65%;

    .ImgLayout {
      width: 100%;
      height: 90%;
    }

    ${props => props.wide && `
      width: 100%;
      height: 100%;

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
  
  ${props => props.wide && `width: 65%;`}

  @media all and (max-width: 1700px) {
    margin-left: 30px;

    ${props => props.wide && `width: 67%;`}
  }

  @media all and (max-width: 1450px) {
    ${props => props.wide && `width: 59%;`}
  }

  @media all and (max-width: 1200px) {
    margin-left: 10px;

    ${props => props.wide && `width: 99%;`}
  }
`;

const LeftWatchTitle = styled.div`
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

  .shareBox {
    display: flex;
    color: #606060;
    font-size: 13px;
    align-items: center;
    width: 66px;
    height: 40px;
    cursor: pointer;

    img {
      margin-right: 10px;
    }
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

    & > div:first-child { font-size: 14px; font-weight: 700 };
    & > div:nth-child(2) { font-size: 13px; margin-bottom: 40px };
    & > div:nth-child(3) { font-size: 13px; }
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
    top: 712px;
    right: 43px;
    width: 420px;
  `}

  @media all and (max-width: 1700px) {
    ${props => props.wide && `top: 640px; right: 30px; width: 420px`}
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

const WatchScreen = ({ id, title, handleClickModal, searchVideos }) => {
  search_data.query = title;

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    dispatch(searchPostList());
  }, [title])

  const filterVideos = searchVideos.filter(x => x.videoId == id)

  const [layout, setLayout] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
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
      dispatch(searchContinuePostList())
    }
  }

  const onClickHandleModal = (e) => {
    handleClickModal && handleClickModal();
  }

  return (
    <>
      {
        filterVideos.map((watch, key) => {
          return (
            <WatchBoxLayout key={key}>
            <LeftWatch wide={isWidened}>
              <WatchBoxFotterLayout wide={isWidened}>
                <img src={watch.thumbnail.thumbnails[0].url} className="ImgLayout" />
                <FotterBar>
                  <div className="videoLength"></div>
                  <img src={ImgData.wind} onClick={onClickWiden} />
                </FotterBar>
              </WatchBoxFotterLayout>
              <LeftWatchUser wide={isWidened}>
                <LeftWatchTitle>
                  <span>{watch.title.runs[0].text}</span>
                  <br />
                  <span>{watch.shortViewCountText.simpleText} • {watch.publishedTimeText.simpleText}</span>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}>
                    <div onClick={onClickHandleModal} className="shareBox">
                      <img src={ImgData.share} />
                      <span>공유</span>
                    </div>
                  </div>
                </LeftWatchTitle>
                <LeftWatchInformation>
                  <img src={watch.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer.thumbnail.thumbnails[0].url} />
                  <div>
                    <div>{watch.longBylineText.runs[0].text}</div>
                    <div>구독자 72만명</div>
                    <div className="fotterText">
                      <div>{watch.descriptionSnippet.runs.map(val => val.text)}</div>
                    </div>
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
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}>구독
                  </div>
                </LeftWatchInformation>
                <LeftWatchComment>
                  <span>댓글 1000개</span> <br />
                  <div className="myComment">
                    <img src={ImgData.iconRight4} />
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
                searchVideos.map((video, key) => {
                  return (
                    <RightWatchListLayout key={key}>
                      <img src={video.thumbnail.thumbnails[0].url} />
                      <RightWatchTextLayout>
                        <span style={{ fontSize: '14px' }}>{video.title.runs[0].text}</span>
                        <span style={{ fontSize: '11px', color: '#606060' }}>{video.longBylineText.runs[0].text} <br /> {video.shortViewCountText.simpleText} • {video.publishedTimeText && video.publishedTimeText.simpleText} </span>
                        <span style={{ fontSize: '11px', color: '#606060', marginTop: '19px' }}>{}</span>
                      </RightWatchTextLayout>
                    </RightWatchListLayout>
                  )
                })
              }
            </RightWatch>
          </WatchBoxLayout>
          )
        })
      }
    </>
  )
}

export default WatchScreen;