import React from 'react';
import styled from 'styled-components'

import sideImg1 from '../lib/png/sideImg1.png';
import sideImg2 from '../lib/png/sideImg2.png';
import sideImg3 from '../lib/png/sideImg3.png';
import sideImg4 from '../lib/png/sideImg4.png';
import sideImg5 from '../lib/png/sideImg5.png';
import sideImg6 from '../lib/png/sideImg6.png';
import sideImg7 from '../lib/png/sideImg7.png';
import sideImg8 from '../lib/png/sideImg8.png';
import sideImg9 from '../lib/png/sideImg9.png';
import sideImg10 from '../lib/png/sideImg10.png';
import sideImg11 from '../lib/png/sideImg11.png';
import sideImg12 from '../lib/png/sideImg12.png';
import sideImg13 from '../lib/png/sideImg13.png';
import sideImg14 from '../lib/png/sideImg14.png';
import sideImg15 from '../lib/png/sideImg15.png';
import sideImg16 from '../lib/png/sideImg16.png';
import sideImg17 from '../lib/png/sideImg17.png';
import sideImg18 from '../lib/png/sideImg18.png';
import sideImg19 from '../lib/png/sideImg19.png';
import sideImg20 from '../lib/png/sideImg20.png';

const SortationSideBar = () => {
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

  return (
    <>
      <SideLayout_1>
        <LayoutBox>
          <img src={sideImg1} />
          <span>홈</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg2} />
          <span>인기</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg3} />
          <span>구독</span>
        </LayoutBox>
      </SideLayout_1>
      <SideLayout_2>
        <LayoutBox>
          <img src={sideImg4} />
          <span>보관함</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg5} />
          <span>시청기록</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg6} />
          <span>나중에 볼 동영상</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg7} />
          <span>좋아요 표시한 동영상</span>
        </LayoutBox>
      </SideLayout_2>
      <SideLayout_3>
        <LayoutBoxHeader>구독</LayoutBoxHeader>
        <LayoutBox>
          <img src={sideImg8} />
          <span>음악</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg9} />
          <span>스포츠</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg10} />
          <span>게임</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg11} />
          <span>영화</span>
        </LayoutBox>
      </SideLayout_3>
      <SideLayout_4>
        <LayoutBoxHeader>YouTube 더보기</LayoutBoxHeader>
        <LayoutBox>
          <img src={sideImg12} />
          <span>YouTube Preminum</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg13} />
          <span>영화</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg14} />
          <span>고객센터</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg15} />
          <span>실시간</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg16} />
          <span>학습</span>
        </LayoutBox>
      </SideLayout_4>
      <SideLayout_2>
        <LayoutBox>
          <img src={sideImg17} />
          <span>설정</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg18} />
          <span>신고기록</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg19} />
          <span>고객센터</span>
        </LayoutBox>
        <LayoutBox>
          <img src={sideImg20} />
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
    </>
  )
}

export default SortationSideBar;