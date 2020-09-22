import React from 'react';
import styled from 'styled-components';

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

const SideBar = () => {
  const SideBar = styled.div`
    height: calc(100% - 60px);
    overflow: auto;
    width: 15rem;
    background-color: #ffffff;
    position: fixed;
    top: 60px;

    div {
      box-sizing: border-box;
    }
    
    img {
      width: 24px;
      height: 24px;
    }
  `;

  const SideBarLayout = styled.div`
    padding-bottom: 15px;

    div > div:hover {
      cursor: pointer;
      background-color: #e8e8e8;
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

  const FirstLayoutBox1_1 = styled.div`
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

  const SecondLayoutBox1_2 = styled(FirstLayoutBox1_1)``;
  const ThirdLayoutBox1_3 = styled(FirstLayoutBox1_1)``;

  const SideLayout_2 = styled(SideLayout_1)`
    height: 173px;
  `;

  return (
    <SideBar>
      <SideBarLayout>
        <SideLayout_1>
          <FirstLayoutBox1_1>
            <img src={sideImg1} />
            <span>홈</span>
          </FirstLayoutBox1_1>
          <SecondLayoutBox1_2>
            <img src={sideImg2} />
            <span>인기</span>
          </SecondLayoutBox1_2>
          <ThirdLayoutBox1_3>
            <img src={sideImg3} />
            <span>구독</span>
          </ThirdLayoutBox1_3>
        </SideLayout_1>

        
      </SideBarLayout>
    </SideBar>
  )
}

export default SideBar;