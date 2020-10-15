import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { ImgData } from '../../lib/png';

const SideLayoutBox = styled.div`
  ${props => props.collapsed && `
    position: fixed;
    z-index: 999;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffff;
    width: 240px;
    overflow: auto;

    @keyframes left {
      from {
        transform: translate(-100%, 0px);
      }
      to {
        transform: translate(0%, 0px);
      }
    }

    animation: left 0.5s ;
    }
  `}

  ${props => props.active && `
    transform: translate(-100%, 0px);
    transition-duration: 0.5s;
  `}

  @media all and (max-width: 1300px) {
    display: none;

    ${props => props.wide && `
      display: block;
    `}
  }
`;

const SideLayout_1 = styled.div`
  width: 100%;
  height: 140px;
  margin-top: 10px;
  border-bottom: 1px solid #e8e8e8;

  div:first-child {
    background-color: #e8e8e8;  
  }

  div {
    box-sizing: border-box;
  }
`;

const SideLayout_2 = styled(SideLayout_1)`
  height: 173px;

  div:first-child {
    background-color: #fff;  
  }
`;

const SideLayout_3 = styled(SideLayout_2)`
  height: 210px;
`;

const SideLayout_4 = styled(SideLayout_2)`
  height: 250px;
`;

const SideLayout_5 = styled.div`
  width: 100%;
  font-size: 13px;
`;

const LayoutBox = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  font-size: 14px;

  img {
    margin: 0 24px 0 0;
  }
`;

const LayoutBoxHeader = styled.div`
  width: 100%;
  height: 33px;
  font-size: 14px;
  padding: 8px 24px;
`;

const HeaderMessageBoxLayout = styled.div`
  padding: 16px 24px 0px;

  span {
    margin-right: 8px;
  }
`;

const MiddleMessageBoxLayout = styled(HeaderMessageBoxLayout)`
  padding: 12px 24px 0px;
`;

const FooterMessageBoxLayout = styled(HeaderMessageBoxLayout)`
  padding: 16px 24px;
  font-size: 0.8125rem;
  color: #909090;

  span {
    margin-right: 0px;
  }
`;

const SortationSideBar = (props) => {
  return (
    <SideLayoutBox collapsed={props.collapsed} active={props.active}>
      <SideLayout_1>
        <LayoutBox>
          <img src="/img/sideImg1.png" />
          <span>홈</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg2} />
          <span>인기</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg3} />
          <span>구독</span>
        </LayoutBox>
      </SideLayout_1>
      <SideLayout_2>
        <LayoutBox>
          <img src={ImgData.sideImg4} />
          <span>보관함</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg5} />
          <span>시청기록</span>
        </LayoutBox>
        <Link to="/list" style={{ textDecoration: 'none' }}>
          <LayoutBox>
            <img src={ImgData.sideImg6} />
            <span style={{ color: '#000000'}}>나중에 볼 동영상</span>
          </LayoutBox>
        </Link>
        <LayoutBox>
          <img src={ImgData.sideImg7} />
          <span>좋아요 표시한 동영상</span>
        </LayoutBox>
      </SideLayout_2>
      <SideLayout_3>
        <LayoutBoxHeader>구독</LayoutBoxHeader>
        <LayoutBox>
          <img src={ImgData.sideImg8} />
          <span>음악</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg9} />
          <span>스포츠</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg10} />
          <span>게임</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg11} />
          <span>영화</span>
        </LayoutBox>
      </SideLayout_3>
      <SideLayout_4>
        <LayoutBoxHeader>YOUTUBE 더보기</LayoutBoxHeader>
        <LayoutBox>
          <img src={ImgData.sideImg12} />
          <span>YouTube Preminum</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg13} />
          <span>영화</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg14} />
          <span>고객센터</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg15} />
          <span>실시간</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg16} />
          <span>학습</span>
        </LayoutBox>
      </SideLayout_4>
      <SideLayout_2>
        <LayoutBox>
          <img src={ImgData.sideImg17} />
          <span>설정</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg18} />
          <span>신고기록</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg19} />
          <span>고객센터</span>
        </LayoutBox>
        <LayoutBox>
          <img src={ImgData.sideImg20} />
          <span>의견 보내기</span>
        </LayoutBox>
      </SideLayout_2>
      <SideLayout_5>
        <HeaderMessageBoxLayout>
          <span>정보</span>
          <span>프레스</span>
          <span>저작권</span>
          <span>문의하기</span>
          <br />
          <span>크리에이터</span>
          <span>광고</span>
          <span>개발자</span>
        </HeaderMessageBoxLayout>
        <MiddleMessageBoxLayout>
          <span>이용약관</span>
          <span>개인정보 보호</span>
          <br />
          <span>정책 및 안전</span>
          <br />
          <span>YouTube 작동의 원리</span>
          <br />
          <span>새로운 기능 테스트하기</span>
        </MiddleMessageBoxLayout>
        <FooterMessageBoxLayout>
          <span>
            © 2020 Google LLC
          <br />
            회사명: Google LLC
          <br />
            CEO: Sundar Pichai
          <br />
            주소: 1600 Amphitheatre
          <br />
            Parkway, Mountain View, CA 94043 USA.
          <br />
            전화: 080-822-1450 (무료)
          </span>
        </FooterMessageBoxLayout>
      </SideLayout_5>
    </SideLayoutBox>
  )
}

export default SortationSideBar;