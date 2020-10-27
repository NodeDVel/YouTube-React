import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { ImgData } from '../../lib/png';

const MiddleHover = styled.div`
  transition: .2s ease;
  opacity: 0;
  position: absolute;
  top: 4%;
  left: 214px;
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
  /* transition: .8s ease-in-out; */
  opacity: 0;
  position: absolute;
  top: 0;
  right: 100%;
  text-align: center;
  cursor: pointer;

  ${props => props.changed && `
    width: 49px;
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
  
  & > img {
    height: 28px;
  }

  &:hover ${MiddleHover2} {
    opacity: 1;
  }

  &:hover ${MiddleHover3} {
    opacity: 1;
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

  & > .infor {
    width: 100%;
    height: 61px;
    display: flex;
    align-items: center;

    & > img {
      border-radius: 40px;
      width: 24px;
      margin-right: 6px;
    }

    & > span {
      font-size: 13px;
      color: #aaaaaa
    }
  }
`;

const SearchResultItem = ({
  title,
  lists,
  onInsert,
  onRemove,
  searchVideos
}) => {
  return (
    <>
      {
        searchVideos.map((video, key) => {
          const CheckId = lists.find(list => {
            if (list.videoId === video.videoId) {
              return true;
            }
          });

          return (
            <SearchResultListLayout key={key}>
              <Link to={{
                pathname: `/watch/${title}/${video.videoId}`,
                state: video
              }}>
                <img src={video.thumbnail.thumbnails[0].url} width="249px" height="138px" />
              </Link>
              <MiddleHover>
                <div>
                  <ImgHover>
                    <img onClick={CheckId ? () => onRemove(video.videoId) : () => onInsert(video)} src={CheckId ? ImgData.check : ImgData.videoImg2} />
                    <MiddleHover2 changed={CheckId}>
                      <img src={CheckId ? ImgData.plus : ImgData.videoImg4} />
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
              <SearchListTextLayout>
                <span style={{ fontSize: '18px' }}>{video.title.runs[0].text}</span>
                <span style={{ fontSize: '13px', color: '#606060' }}>{video.shortViewCountText.simpleText} • {video.publishedTimeText && video.publishedTimeText.simpleText}</span>
                <div className="infor">
                  <img src={video.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer.thumbnail.thumbnails[0].url} />
                  <span>{video.longBylineText.runs[0].text}</span>
                </div>
                <span style={{ fontSize: '13px', color: '#606060' }}>{video.descriptionSnippet && video.descriptionSnippet.runs.map(val => val.text)}</span>
              </SearchListTextLayout>
            </SearchResultListLayout>
          )
        })
      }
    </>
  )
}

export default SearchResultItem;