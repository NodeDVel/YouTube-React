import React, { useState, useEffect } from 'react';

import styled from 'styled-components'

import SearchResultList from './SearchResultList.component';
import Exception from './Exception.component';

import filterImg from '../lib/png/filter.png';

const SpaceBoxLayout = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const SpaceBox = styled.div`
  width: 274px;
  height: 100%;
  background-color: #F9F9F9;

  ${props => props.changed && `
    width: 75px;
  `
  }

  @media all and (max-width: 1300px) {
    width: 81px;
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
  margin: 1% 4% 1% 12%;
  height: 100%;

  ${props => props.changed && `
    margin: 1% 4% 1% 1.5%;
  `}

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
  width: 862px;
  height: 36px;
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 10px;
  cursor: pointer;

  span {
    font-size: 14px;
    margin-left: 8px;
    color: #606060;
  }
`;

const SearchResult = (props) => {
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  const [layout, setLayout] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

  const onScroll = (e) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setLayout((arr) => arr.concat(arr.length));
    }
  }

  return (
    <>
      {
        props.title === "popularChart" || "news" || "vlog"
          ? 
          <SpaceBoxLayout>
            <SpaceBox changed={props.collapsed} />
            <SearchListBox>
              <SearchListLayout changed={props.collapsed}>
                <SearchFilter>
                  <img src={filterImg} />
                  <span>필터</span>
                </SearchFilter>
                {
                  layout.map((val, key) => {
                    return (
                      <SearchResultList collapsed={props.collapsed} key={key} title={props.title} />
                    )
                  })
                }
              </SearchListLayout>
            </SearchListBox>
          </SpaceBoxLayout>
          : <h1>{props.title}에 대한 검색 결과가 없습니다.</h1>
      }
    </>
  )
}

export default SearchResult;