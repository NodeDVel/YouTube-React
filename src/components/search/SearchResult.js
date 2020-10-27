import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { searchContinuePostList, searchPostList } from '../../modules/youtubeList';

import InsertSerachResultListContainer from '../../containers/InsertSerachResultListItemContainer';

import styled from 'styled-components'

import { ImgData } from '../../lib/png';
import { search_data } from '../../lib/apiData';

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
    width: auto;
    margin-left: 5%;
  }

  @media all and (max-width: 650px) {
    display: none;
  }
`;

const SearchListBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
`;

const SearchListLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1% 4% 0% 12%;
  height: 100%;

  ${props => props.changed && `margin: 1% 4% 1% 1.5%;`}

  @media all and (max-width: 1000px) {
    margin: 1% 6% 1% 7%;
  }

  @media all and (max-width: 573px) {
    margin: 1% 0% 0% 0%;
  }
`;

const SearchFilter = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
  height: 36px;
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 10px;

  img, span {
    cursor: pointer;
  }

  span {
    font-size: 14px;
    margin-left: 8px;
    color: #606060;
  }

  @media all and (max-width: 800px) {
    width: 80%;
  }

  @media all and (max-width: 573px) {
    margin-left: 1%;
    width: 90%;
  }
`;

const SearchResult = ({ collapsed, title, searchVideos }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    search_data.query = title;

    dispatch(searchPostList());
  }, [title]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  const onScroll = (e) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      dispatch(searchContinuePostList());
    }
  }

  return (
    <SpaceBoxLayout>
      <SpaceBox changed={collapsed} />
      <SearchListBox>
        <SearchListLayout changed={collapsed}>
          <SearchFilter>
            <img src={ImgData.filter} />
            <span>필터</span>
          </SearchFilter>
          {
            searchVideos
             ? <InsertSerachResultListContainer collapsed={collapsed} title={title} searchVideos={searchVideos} />
             : <h3>검색 결과가 없습니다</h3>
          }
        </SearchListLayout>
      </SearchListBox>
    </SpaceBoxLayout>
  )
}

export default SearchResult;