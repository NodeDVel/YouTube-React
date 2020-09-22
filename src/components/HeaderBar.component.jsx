import React from 'react';
import styled from 'styled-components';

import iconPng from '../lib/png/icon.png';
import mainIcon from '../lib/png/mainIcon.png';
import middleIcon from '../lib/png/iconMiddle.png';

import buttonPng from '../lib/png/Button.png'

import rightIcon_1 from '../lib/png/iconRight-1.png';
import rightIcon_2 from '../lib/png/iconRight-2.png';
import rightIcon_3 from '../lib/png/iconRight-3.png';
import rightIcon_4 from '../lib/png/iconRight-4.png';
import rightIcon_5 from '../lib/png/iconRight-5.png';

const LayoutHeader = styled.div`
  width: 100%;
  height: 56px;
`;

const Header = styled.div`
  position: fixed;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  padding: 0px 1rem;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
`;

const LeftHeader = styled.div`
  width: 12.2273628553%;
  display: flex;
  align-items: center;

  img:first-child {
    padding: 0.5rem;
    margin: 0 1rem 0 0;
  }
`;

const SearchHeader = styled.div`
  display: flex;
  width: 35.82881692%;
  position: relative;

  div:nth-child(2) {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 5px;
  }

  input {
    font-size: 16px;
    text-indent: 5px;
    padding: 0;
    color: #111111;
    width: 85%;
    height: 28px;
    border: 1px solid #ccc;
    border-right: none;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    outline: none;
  }
`;

const SearchHeaderButton = styled.div`
  background-color: #F8F8F8;
  cursor: pointer;
  width: 4.063rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const RightHeader = styled.div`
  width: 13.4831460674%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img:first-child {
    display: none;
  }

  img {
    margin-left: 27px;
  }
`;

const HeaderBar = () => {
  return (
    <LayoutHeader>
      <Header>
        <LeftHeader>
          <img src={iconPng} />
          <img src={mainIcon} />
        </LeftHeader>
        <SearchHeader>
          <input type="text" placeholder="검색" />
          <div><img src={middleIcon} /></div>
          <SearchHeaderButton>
            <img src={buttonPng} />
          </SearchHeaderButton>
        </SearchHeader>
        <RightHeader>
          <img src={rightIcon_5} />
          <img src={rightIcon_1} />
          <img src={rightIcon_2} />
          <img src={rightIcon_3} />
          <img src={rightIcon_4} />
        </RightHeader>
      </Header>
    </LayoutHeader>
  )
}

export default HeaderBar;
