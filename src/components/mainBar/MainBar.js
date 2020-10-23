import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import VideoLayoutContainer from '../../containers/VideoLayoutContainer';

import { postList } from '../../modules/youtubeList';

const SpaceBoxLayout = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const SpaceBox = styled.div`
  width: 274px;
  height: 100%;
  background-color: #F9F9F9;

  ${props => props.changed && `width: 75px;`}

  @media all and (max-width: 1300px) {
    width: 81px;
  }

  @media all and (max-width: 650px) {
    display: none;
  }
`;

const MainBarBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
`;

const MainBarLayout = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 1% 4% 1% 5%;
  height: 100%;

  ${props => props.changed && `margin: 1% 4% 1% 1.5%;`}

  @media all and (max-width: 1000px) {
    margin: 1% 6% 1% 7%;
  }

  @media all and (max-width: 573px) {
    margin: 1% 0% 0% 0%;
  }
`;

const MainBar = ({ collapsed, videos }) => {
  const dispatch = useDispatch();

  const onScroll = (e) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      dispatch(postList());
    }
  }

  useEffect(() => {
    dispatch(postList());
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <SpaceBoxLayout>
      <SpaceBox changed={collapsed} />
      <MainBarBox>
        <MainBarLayout changed={collapsed}>
          <VideoLayoutContainer collapsed={collapsed} videos={videos} />
        </MainBarLayout>
      </MainBarBox>
    </SpaceBoxLayout>
  )
}

export default MainBar;