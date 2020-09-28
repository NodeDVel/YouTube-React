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

import thirdRightImg from '../lib/png/ThirdRightImg.png';
import thirdRightImg2 from '../lib/png/ThirdRightImg2.png';
import thirdRightImg3 from '../lib/png/ThirdRightImg3.png';

import fourthRightImg1 from '../lib/png/FourthRightImg1.png';
import fourthRightImg2 from '../lib/png/FourthRightImg2.png';
import fourthRightImg3 from '../lib/png/FourthRightImg3.png';
import fourthRightImg4 from '../lib/png/FourthRightImg4.png';
import fourthRightImg5 from '../lib/png/FourthRightImg5.png';
import fourthRightImg6 from '../lib/png/FourthRightImg6.png';
import fourthRightImg7 from '../lib/png/FourthRightImg7.png';
import fourthRightImg8 from '../lib/png/FourthRightImg8.png';
import fourthRightImg9 from '../lib/png/FourthRightImg9.png';
import fourthRightImg10 from '../lib/png/FourthRightImg10.png';
import fourthRightImg11 from '../lib/png/FourthRightImg11.png';
import fourthRightImg12 from '../lib/png/FourthRightImg12.png';
import fourthRightImg13 from '../lib/png/FourthRightImg13.png';
import fourthRightImg14 from '../lib/png/FourthRightImg14.png';


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

const SecondRightHeaderBox = styled(FirstRightHeaderBox)``;

const ThirdRightHeaderClickMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 478px;
  height: 610px;
  max-height: 1949px;
  border: 1px solid #eee;
  position: absolute;
  top: 50px;
  right: 81px;
`;

const ThirdRightHeaderBox = styled.div`
  width: 100%;
  height: 49px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0px 15px;
  border-bottom: 1px solid #eee;
`;

const ThirdRightListBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  cursor: pointer;

  & > div:hover {
    background-color: #e8e8e8;
  }
`;

const FourthRightHeaderClickMenu = styled.div`
  width: 298px;
  height: 719px;
  background-color: #ffffff;
  border: 1px solid #eee;
  position: absolute;
  top: 50px;
  right: 15px;
  box-sizing: border-box;

  .FourthRightMenu_1 {
    display: flex;
    padding: 16px;
    flex-direction: row;
    border-bottom: 2px solid #eee;

    img {
      width: 50px;
      height: 42px;
      margin-right: 8px;
    }
    
    span {
      font-size: 14px;
      margin-bottom: 2px;
    }

    span:first-child {
      font-size: 18px;
      font-weight: 600;
    }

    span:last-child {
      margin-top: 10px;
      color: #065fd4;
      cursor: pointer;
    }

    div {
      display: flex;
      flex-direction: column
    }
  }

  .FourthRightMenu_2 {
    padding: 8px 0px;
    border-bottom: 2px solid #eee;

    div {
      display: flex;
      align-items: center;
      height: 40px;
      cursor: pointer;
      padding: 0px 16px;
    }

    div:hover {
      background-color: #e8e8e8;
    }

    img {
      margin-right: 16px;
    }
  }

  .FourthRightMenu_3 {
    padding: 8px 0px;
    height: 56px;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    div {
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 14px;
      padding: 0px 16px;
    }

    div:hover {
      background-color: #e8e8e8;
    }

    span {
      display: flex;
      flex: 1;
    }
  }
`;

const HeaderBar = (props) => {
  const handleClick = (e) => {
    props.onClickMenu && props.onClickMenu();
  };

  const [items, setItems] = useState([]);

  const nextId = useRef(1);

  const [value, setValue] = useState('');
  const [isShowed, setShowed] = useState(false);

  const [openPopup, setOpenPopup] = useState('');
  const [isPressed, setPressed] = useState(false);

  const onClickOpenPopup = (str) => {
    setOpenPopup(str);
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

      if (!item.text) {
        alert('최소 1자 이상 입력해주세요');
      } else {
        setItems(items.concat(item));
        nextId.current += 1;
      }

    },
    [items]
  )

  const onRemove = useCallback(
    id => {
      setItems(items.filter(item => item.id !== id));
    },
    [items]
  )

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
            isShowed && <SearchList items={items} onRemove={onRemove} />
          }
        </SearchHeader>
        <RightHeader>
          <RightImgHeader hover={isPressed}>
            <img src={rightIcon_5} />
            <HoverText1>검색</HoverText1>
          </RightImgHeader>
          <RightImgHeader hover={isPressed}>
            <img src={rightIcon_1} onClick={() => onClickOpenPopup('upload')} />
            <HoverText2>만들기</HoverText2>
            {
              openPopup === 'upload' && isPressed &&
              <FirstRightHeaderClickMenu>
                <FirstRightHeaderBox>
                  <img src={firstRightImg} />
                  <span>동영상 업로드</span>
                </FirstRightHeaderBox>
                <FirstRightHeaderBox>
                  <img src={firstRightImg2} />
                  <span>실시간 스트리밍 시작</span>
                </FirstRightHeaderBox>
              </FirstRightHeaderClickMenu>
            }
          </RightImgHeader>
          <RightImgHeader hover={isPressed}>
            <img src={rightIcon_2} onClick={() =>  onClickOpenPopup('app')} />
            <HoverText3>YouTube 앱</HoverText3>
            {
              openPopup === 'app' && isPressed &&
              <SecondRightHeaderClickMenu>
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
              </SecondRightHeaderClickMenu>
            }
          </RightImgHeader>
          <RightImgHeader hover={isPressed}>
            <img src={rightIcon_3} onClick={() => onClickOpenPopup('noti')} />
            <HoverText4>알림</HoverText4>
            {
              openPopup === 'noti' && isPressed &&
              <ThirdRightHeaderClickMenu>
                <ThirdRightHeaderBox>
                  <span style={{
                    display: 'flex',
                    flex: 1,
                    fontSize: '16px'
                  }}>알림</span>
                  <img src={thirdRightImg} />
                </ThirdRightHeaderBox>
                <ThirdRightListBox>
                  <div style={{
                    display: 'flex',
                    padding: '10px 65px 0px 7px',
                  }}>
                    <img src={thirdRightImg2} style={{
                      marginRight: '8px',
                      height: '100%',
                    }} />
                    <span style={{
                      fontSize: '14px',
                    }}>
                      맞춤 동영상: 유튜브 좋은 노래 명곡 100곡
                      Best K POP Songs Korean #발라드 모음
                    <br />
                      <span style={{
                        fontSize: '13px',
                        color: '#606060',
                      }}>1주전</span>
                    </span>
                    <img src={thirdRightImg3} style={{
                      marginLeft: '10px',
                    }} />
                  </div>
                  <div style={{
                    display: 'flex',
                    padding: '30px 65px 0px 7px',
                  }}>
                    <img src={thirdRightImg2} style={{
                      marginRight: '8px',
                      height: '100%',
                    }} />
                    <span style={{
                      fontSize: '14px',
                    }}>
                      맞춤 동영상: 유튜브 좋은 노래 명곡 100곡
                      Best K POP Songs Korean #발라드 모음
                    <br />
                      <span style={{
                        fontSize: '13px',
                        color: '#606060',
                      }}>1주전</span>
                    </span>
                    <img src={thirdRightImg3} style={{
                      marginLeft: '10px',
                    }} />
                  </div>
                  <div style={{
                    display: 'flex',
                    padding: '30px 65px 0px 7px',
                  }}>
                    <img src={thirdRightImg2} style={{
                      marginRight: '8px',
                      height: '100%',
                    }} />
                    <span style={{
                      fontSize: '14px',
                    }}>
                      맞춤 동영상: 유튜브 좋은 노래 명곡 100곡
                      Best K POP Songs Korean #발라드 모음
                    <br />
                      <span style={{
                        fontSize: '13px',
                        color: '#606060',
                      }}>1주전</span>
                    </span>
                    <img src={thirdRightImg3} style={{
                      marginLeft: '10px',
                    }} />
                  </div>
                </ThirdRightListBox>
              </ThirdRightHeaderClickMenu>
            }
          </RightImgHeader>
          <RightImgHeader hover={isPressed}>
            <img src={rightIcon_4} onClick={() => onClickOpenPopup('profile')} />
            {
              openPopup === 'profile' && isPressed &&
              <FourthRightHeaderClickMenu>
                <div className="FourthRightMenu_1">
                  <img src={rightIcon_4} alt="" />
                  <div>
                    <span>김민기</span>
                    <span>minki@firmagroup.co</span>
                    <span>Google 계정 관리</span>
                  </div>
                </div>
                <div className="FourthRightMenu_2">
                  <div>
                    <img src={fourthRightImg1} />
                    <span>채널 만들기</span>
                  </div>
                  <div>
                    <img src={fourthRightImg2} />
                    <span>유료 멤버십</span>
                  </div>
                  <div>
                    <img src={fourthRightImg3} />
                    <span>YouTube 스튜디오</span>
                  </div>
                  <div>
                    <img src={fourthRightImg4} />
                    <span style={{ display: 'flex', flex: '1' }}>계정 전환</span>
                    <img src={fourthRightImg14} width="22px" style={{ margin: '0px' }} />
                  </div>
                  <div>
                    <img src={fourthRightImg5} />
                    <span>로그아웃</span>
                  </div>
                </div>
                <div className="FourthRightMenu_2">
                  <div>
                    <img src={fourthRightImg6} />
                    <span style={{ display: 'flex', flex: '1' }}>어두운 테마: 사용 안함</span>
                    <img src={fourthRightImg14} width="22px" style={{ margin: '0px' }} />
                  </div>
                  <div>
                    <img src={fourthRightImg7} />
                    <span style={{ display: 'flex', flex: '1' }}>언어: 한국어</span>
                    <img src={fourthRightImg14} width="22px" style={{ margin: '0px' }} />
                  </div>
                  <div>
                    <img src={fourthRightImg8} />
                    <span style={{ display: 'flex', flex: '1' }}>위치: 한국</span>
                    <img src={fourthRightImg14} width="22px" style={{ margin: '0px' }} />
                  </div>
                  <div>
                    <img src={fourthRightImg9} />
                    <span>설정</span>
                  </div>
                  <div>
                    <img src={fourthRightImg10} />
                    <span>YouTube의 내 데이터</span>
                  </div>
                  <div>
                    <img src={fourthRightImg11} />
                    <span>고객센터</span>
                  </div>
                  <div>
                    <img src={fourthRightImg12} />
                    <span>의견 보내기</span>
                  </div>
                  <div>
                    <img src={fourthRightImg13} />
                    <span>단축키</span>
                  </div>
                </div>
                <div className="FourthRightMenu_3">
                  <div style={{ display: 'flex', flex: '1' }}>
                    <span>제한 모드: 사용 안함</span>
                    <img src={fourthRightImg14} width="22px" style={{ margin: '0px' }} />
                  </div>
                </div>
              </FourthRightHeaderClickMenu>
            }
          </RightImgHeader>
        </RightHeader>
      </Header>
    </LayoutHeader>
  )
}

export default HeaderBar;