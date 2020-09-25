import React, { useRef, useState, useCallback } from 'react';
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

import firstRightImg from '../lib/png/FirstRightImg.png';
import firstRightImg2 from '../lib/png/FirstRightImg2.png';

import secondRightImg from '../lib/png/SecondRightImg.png';
import secondRightImg2 from '../lib/png/SecondRightImg2.png';
import secondRightImg3 from '../lib/png/SecondRightImg3.png';
import secondRightImg4 from '../lib/png/SecondRightImg4.png';

import SearchList from './SearchList';

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

const SearchHeader = styled.form`
  display: flex;
  width: 35.82881692%;
  position: relative;

  .icon {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 5px;
  }

  @media all and (max-width: 650px) {
    display: none;
  }
`;

const SearchHeaderInput = styled.input`
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
`;

const SearchHeaderButton = styled.button`
  outline: none;
  background-color: #F8F8F8;
  cursor: pointer;
  width: 4.163rem;
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
    ${props => props.hover && `
      opacity: 0;
    `
  }
  }

  @media all and (max-width: 650px) {
    &:first-child {
      display: block;
    }
  }
`;

const FirstRightHeaderClickMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50px;
  right: 0px;
  width: 212px;
  height: 96px;
  padding: 8px 0;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #eee;
`;

const FirstRightHeaderBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0px 15px;

  img {
    width: 23px;
    margin-right: 14px;
  }

  &:hover {
    cursor:pointer;
    background-color: #e8e8e8;
  }
`;

const SecondRightHeaderClickMenu = styled(FirstRightHeaderClickMenu)`
  width: 210px;
  height: 251px;
  right: 135px;
`;

const SecondRightHeaderBox = styled(FirstRightHeaderBox)`
`;
const HeaderBar = (props) => {
  const handleClick = (e) => {
    props.onClickMenu && props.onClickMenu();
  };

  const [items, setItems] = useState([]);

  const nextId = useRef(1);

  const [value, setValue] = useState('');
  const [isShowed, setShowed] = useState(false);
  const [isPressed, setPressed] = useState(false);

  const onClickPressed = (e) => {
    setPressed(!isPressed);
  }

  const onClickSearch = (e) => {
    setShowed(!isShowed);
  }

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = (e) => {
    onInsert(value);
    setValue('');

    e.preventDefault();
  }

  const onInsert = useCallback(
    text => {
      const item = {
        id: nextId.current,
        text,
      }

      setItems(items.concat(item));
      nextId.current += 1;
    },
    [items]
  )

  const onRemove = useCallback(
    id => {
      setItems(items.filter(item => item.id !== id));
    },
    [items]
  )

  const onClickValue = (val) => {
    const bool = isPressed;

    if (bool) { //true
      switch (val) { //1
        case 1:
          setPressed(!isPressed);
          break;
        case 2:
          setPressed(!isPressed);
      }
    } else {
      console.log('Button false');
    }
  }

  return (
    <LayoutHeader>
      <Header>
        <LeftHeader>
          <img src={iconPng} onClick={handleClick} />
          <img src={mainIcon} />
        </LeftHeader>
        <SearchHeader onSubmit={onSubmit}>
          <SearchHeaderInput placeholder="검색" onClick={onClickSearch} onChange={onChange} value={value} />
          <div className="icon"><img src={middleIcon} /></div>
          <SearchHeaderButton>
            <img src={buttonPng} />
          </SearchHeaderButton>
          {
            isShowed ? <SearchList items={items} onRemove={onRemove} /> : console.log('Not List')
          }
        </SearchHeader>
        <RightHeader>
          <RightImgHeader hover={isPressed}>
            <img src={rightIcon_5} />
            <HoverText1>검색</HoverText1>
          </RightImgHeader>
          <RightImgHeader hover={isPressed}>
            <img src={rightIcon_1} onClick={onClickPressed} />
            <HoverText2>만들기</HoverText2>
            {
              isPressed
                ?
                <FirstRightHeaderClickMenu>
                  <FirstRightHeaderBox>
                    <img src={firstRightImg} />
                    <span>동영상 업로드</span>
                  </FirstRightHeaderBox>
                  <FirstRightHeaderBox>
                    <img src={firstRightImg2} />
                    <span>실시간 스트리밍 시작</span>
                  </FirstRightHeaderBox>
                </FirstRightHeaderClickMenu> : console.log('Not RightHeader')
            }
          </RightImgHeader>
          <RightImgHeader hover={isPressed}>
            <img src={rightIcon_2} onClick={onClickPressed} />
            <HoverText3>YouTube 앱</HoverText3>
            {
              isPressed
                ? <SecondRightHeaderClickMenu>
                  <div
                    style={{
                      width: '100%',
                      padding: '0px 0px 8px 0px',
                      borderBottom: '1px solid #eee',
                    }}>
                    <SecondRightHeaderBox>
                      <img src={secondRightImg} />
                      <span>YouTube TV</span>
                    </SecondRightHeaderBox>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      padding: '8px 0px',
                      borderBottom: '1px solid #eee',
                    }}>
                    <SecondRightHeaderBox>
                      <img src={secondRightImg2} />
                      <span>YouTube Music</span>
                    </SecondRightHeaderBox>
                    <SecondRightHeaderBox>
                      <img src={secondRightImg3} />
                      <span>YouTube Kids</span>
                    </SecondRightHeaderBox>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      padding: '8px 0px',
                      borderBottom: '1px solid #eee',
                    }}>
                    <SecondRightHeaderBox>
                      <img src={secondRightImg3} />
                      <span>크리에이터 아카데미</span>
                    </SecondRightHeaderBox>
                    <SecondRightHeaderBox>
                      <img src={secondRightImg3} />
                      <span>YouTube for Artists</span>
                    </SecondRightHeaderBox>
                  </div>
                </SecondRightHeaderClickMenu> : console.log('Not RightHeader-2')
            }
          </RightImgHeader>
          <RightImgHeader hover={isPressed}>
            <img src={rightIcon_3} />
            <HoverText4>알림</HoverText4>
          </RightImgHeader>
          <RightImgHeader hover={isPressed}>
            <img src={rightIcon_4} />
          </RightImgHeader>
        </RightHeader>
      </Header>
    </LayoutHeader>
  )
}

export default HeaderBar;