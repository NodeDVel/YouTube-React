import React, { useState } from 'react';
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

const HoverText1 = styled.div`
  font-size: 13px;
  padding: 8px;
  margin: 8px;
  position: absolute;
  top: 54px;
  right: 228px;
  color: #ffffff;
  background-color: #616161;
  opacity: 0;
`;

const HoverText2 = styled(HoverText1)`
  top: 54px;
  right: 168px;
`;

const HoverText3 = styled(HoverText1)`
  top: 54px;
  right: 94px;
`;

const HoverText4 = styled(HoverText1)`
  top: 54px;
  right: 68px;
`;

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

  img {
    cursor: pointer;
  }

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

  @media all and (max-width: 650px) {
    display: none;
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
`;

const RightImgHeader = styled.div`
  & {
    margin-left: 30px;
    cursor: pointer;
  }

  &:first-child {
    display: none;
  }

  &:hover ${HoverText1}, &:hover ${HoverText2}, &:hover ${HoverText3}, &:hover ${HoverText4} {
    opacity: 1;
  }

  @media all and (max-width: 650px) {
    &:first-child {
      display: block;
    }
  }
`;

const HeaderBar = (props) => {
  // const [isShowed, setShowed] = useState(false);

  
  // const onClickSearch = (e) => {
    //   setShowed(true);
    
    //   if (isShowed === true) {
      //   }
      // }
  const handleClick = (e) => {
    props.onClickMenu && props.onClickMenu();
  };

  return (
    <LayoutHeader>
      <Header>
        <LeftHeader>
          <img src={iconPng} onClick={handleClick}/>
          <img src={mainIcon} />
        </LeftHeader>
        <SearchHeader> 
          <input type="text" placeholder="검색"/>
          <div><img src={middleIcon}/></div>
          <SearchHeaderButton>
            <img src={buttonPng} />
          </SearchHeaderButton>
        </SearchHeader>
        <RightHeader>
          <RightImgHeader>
            <img src={rightIcon_5} />
            <HoverText1>검색</HoverText1>
          </RightImgHeader>
          <RightImgHeader>
            <img src={rightIcon_1} />
            <HoverText2>만들기</HoverText2>
          </RightImgHeader>
          <RightImgHeader>
            <img src={rightIcon_2} />
            <HoverText3>YouTube 앱</HoverText3>
          </RightImgHeader>
          <RightImgHeader>
            <img src={rightIcon_3} />
            <HoverText4>알림</HoverText4>
          </RightImgHeader>
          <RightImgHeader>
            <img src={rightIcon_4} />
          </RightImgHeader>
        </RightHeader>
      </Header>
    </LayoutHeader>
  )
}

export default HeaderBar;
